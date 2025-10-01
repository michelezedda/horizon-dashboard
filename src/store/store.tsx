import { create } from "zustand";
import Grid from "../components/dashboard/Grid.jsx";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  SelectedUserStore,
  ProfileStore,
  SelectedRouteStore,
  CalendarStore,
  ThemeStore,
} from "../types/types.tsx";

// Store to manage selected user and their password
export const useSelectedUser = create<SelectedUserStore>((set) => ({
  selectedUser: null,
  password: "password",
  setSelectedUser: (name) => set({ selectedUser: name }),
  setPassword: (password) => set({ password }),
}));

// Store to manage login state globally
export const useProfile = create<ProfileStore>((set) => ({
  login: false,
  setLogin: (login) => set(() => ({ login })),
  formData: {
    firstName: "",
    lastName: "",
    age: 13,
    feet: 0,
    inches: 0,
    pounds: 0,
    stepsPerDayGoal: 10000,
    workoutsPerWeekGoal: 3,
  },
  setFormData: (formData) => set({ formData }),
}));

// Store to manage currently selected route in dashboard navigation
export const useSelectedRoute = create<SelectedRouteStore>((set) => ({
  selectedRoute: { title: "Dashboard", component: <Grid /> },
  setSelectedRoute: (route) => set({ selectedRoute: route }),
}));

// Store to manage the calendar and store the events
export const useCalendar = create<CalendarStore>()(
  persist(
    (set) => ({
      storedEvents: [],
      setStoredEvents: (storedEvents) => set({ storedEvents }),
    }),
    {
      name: "calendar-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// Store to manage the theme and store it
export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "cupcake", // default theme
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage", // key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);
