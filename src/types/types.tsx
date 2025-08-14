import type { ReactElement } from "react";
import type { IconType } from "react-icons";

export type Theme = "cupcake" | "forest";

export type User = {
  id: string;
  name: string;
  img: string;
};

export type SelectedUserStore = {
  selectedUser: User | null;
  password: string;
  setSelectedUser: (name: User | null) => void;
  setPassword: (password: string) => void;
};

export type ProfileStore = {
  login: boolean;
  setLogin: (login: boolean) => void;
  formData: FormData;
  setFormData: (formData: FormData) => void;
};

export type CalendarStore = {
  storedEvents: CalendarEvent[];
  setStoredEvents: (event: CalendarEvent[]) => void;
};

export type ThemeStore = {
  theme: string;
  setTheme: (theme: string) => void;
};

export type Route = {
  key?: string;
  title: string;
  icon?: IconType | undefined;
  component?: ReactElement;
  selected?: boolean;
  Icon?: IconType | undefined;
  onClick?: () => void;
};

export type SelectedRouteStore = {
  selectedRoute: Route;
  setSelectedRoute: (route: Route) => void;
};

export type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  feet: number;
  inches: number;
  pounds: number;
  stepsPerDayGoal: number;
  workoutsPerWeekGoal: number;
};

export type NavbarProps = {
  handleTheme: () => void;
};

export type DashboardProps = {
  theme: Theme;
  handleTheme: () => void;
};

export type SidebarProps = {
  theme: Theme;
  handleTheme: () => void;
};

export type SearchProps = {
  theme: Theme;
  handleTheme: () => void;
};

export type CommandMenuProps = {
  theme: Theme;
  handleTheme: () => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CardProps = {
  Icon: IconType;
  title: string;
  value: string;
  pillText: string;
  trend: string;
  period: string;
};

export type TableRowProps = {
  cusId: string;
  sku: string;
  date: string;
  price: string;
  order: number;
};

export type CalendarEvent = {
  id: number;
  title: string;
  start: Date | null;
  end: Date | null;
};

export type NewEvent = {
  title: string;
  start: Date | null;
  end: Date | null;
};
