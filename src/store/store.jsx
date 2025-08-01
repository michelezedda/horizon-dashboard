import { create } from "zustand";
import Grid from "../components/dashboard/Grid";

// Store to manage selected user and their password
export const useSelectedUser = create((set) => ({
  selectedUser: "",
  password: "password",
  setSelectedUser: (name) => set(() => ({ selectedUser: name })),
  setPassword: (password) => set(() => ({ password: password })),
}));
// Store to manage login state globally
export const useLogin = create((set) => ({
  login: false,
  setLogin: (login) => set(() => ({ login })),
}));
// Store to manage currently selected route in dashboard navigation
export const useSelectedRoute = create((set) => ({
  selectedRoute: { title: "Dashboard", component: <Grid /> },
  setSelectedRoute: (route) => set({ selectedRoute: route }),
}));
