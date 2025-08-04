import { create } from "zustand";
import Grid from "../components/dashboard/Grid.jsx";
import type { ReactElement } from "react";

type User = {
  id: string;
  name: string;
  img: string;
};

type SelectedUserStore = {
  selectedUser: User | null;
  password: string;
  setSelectedUser: (name: User | null) => void;
  setPassword: (password: string) => void;
};

type LoginStore = {
  login: boolean;
  setLogin: (login: boolean) => void;
};

type Route = {
  title: string;
  component: ReactElement;
};

type SelectedRouteStore = {
  selectedRoute: Route;
  setSelectedRoute: (route: Route) => void;
};

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
