import { FiCalendar, FiHome, FiHeart } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import { useState } from "react";
import { useSelectedRoute } from "../../store/store.js";
import MyCalendar from "../dashboard/MyCalendar.js";
import Grid from "../dashboard/Grid.js";
import WorkoutLog from "../dashboard/WorkoutLog.js";
import Goals from "../dashboard/Goals.js";
import type { Route } from "../../types/types.tsx";

function RouteSelect() {
  const [selected, setSelected] = useState<string>("Dashboard");
  const { setSelectedRoute } = useSelectedRoute();
  const routes: Route[] = [
    { title: "Overview", icon: FiHome, component: <Grid /> },
    {
      title: "Calendar",
      icon: FiCalendar,
      component: <MyCalendar />,
    },
    {
      title: "Workout Log",
      icon: FiHeart,
      component: <WorkoutLog />,
    },
    {
      title: "Goals",
      icon: GoGoal,
      component: <Goals />,
    },
  ];

  // Handle route selection to update the dashboard display
  const handleSelect = (route: Route) => {
    setSelected(route.title);
    setSelectedRoute(route);
  };

  return (
    <div className="space-y-1 mt-4 gap-2 grid grid-cols-2 md:grid-cols-1">
      {routes.map((route: Route) => (
        <Route
          key={route.title}
          Icon={route.icon}
          title={route.title}
          selected={selected === route.title}
          onClick={() => handleSelect(route)}
        />
      ))}
    </div>
  );
}

export default RouteSelect;

// Button component representing a single route item
const Route = ({ selected, Icon, title, onClick }: Route) => {
  return (
    <button className={`btn ${!selected && "btn-ghost"}`} onClick={onClick}>
      {Icon && <Icon />}
      <span>{title}</span>
    </button>
  );
};
