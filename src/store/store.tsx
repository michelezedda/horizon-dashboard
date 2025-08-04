import { create } from "zustand";
import Grid from "../components/dashboard/Grid.jsx";
import type {
  SelectedUserStore,
  LoginStore,
  SelectedRouteStore,
} from "../types/types.tsx";

// Store to manage selected user and their password
export const useSelectedUser = create<SelectedUserStore>((set) => ({
  selectedUser: null,
  password: "password",
  setSelectedUser: (name) => set({ selectedUser: name }),
  setPassword: (password) => set({ password }),
}));
// Store to manage login state globally
export const useLogin = create<LoginStore>((set) => ({
  login: false,
  setLogin: (login) => set(() => ({ login })),
}));
// Store to manage currently selected route in dashboard navigation
export const useSelectedRoute = create<SelectedRouteStore>((set) => ({
  selectedRoute: { title: "Dashboard", component: <Grid /> },
  setSelectedRoute: (route) => set({ selectedRoute: route }),
}));
