import { create } from "zustand";
import Grid from "../components/dashboard/Grid";

export const useSelectedUser = create((set) => ({
  selectedUser: "",
  password: "password",
  setSelectedUser: (name) => set(() => ({ selectedUser: name })),
  setPassword: (password) => set(() => ({ password: password })),
}));

export const useLogin = create((set) => ({
  login: false,
  setLogin: (login) => set(() => ({ login })),
}));

export const useSelectedRoute = create((set) => ({
  selectedRoute: { title: "Dashboard", component: <Grid /> },
  setSelectedRoute: (route) => set({ selectedRoute: route }),
}));
