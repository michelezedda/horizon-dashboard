import { create } from "zustand";

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
