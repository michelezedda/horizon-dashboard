import { FiCalendar, FiDollarSign, FiHome, FiHeart } from "react-icons/fi";
import { useState } from "react";
import { useSelectedRoute } from "../../store/store";
import MyCalendar from "../MyCalendar";
import Grid from "../dashboard/Grid";
import Fitness from "../Fitness";
import Finance from "../Finance";

function RouteSelect() {
  const [selected, setSelected] = useState("Dashboard");
  const { setSelectedRoute } = useSelectedRoute();
  const routes = [
    { title: "Dashboard", icon: FiHome, path: "/", component: <Grid /> },
    {
      title: "Calendar",
      icon: FiCalendar,
      component: <MyCalendar />,
    },
    {
      title: "Fitness",
      icon: FiHeart,
      component: <Fitness />,
    },
    {
      title: "Finance",
      icon: FiDollarSign,
      component: <Finance />,
    },
  ];
  const handleSelect = (route) => {
    setSelected(route.title);
    setSelectedRoute(route);
  };

  return (
    <div className="space-y-1 mt-4 gap-2 grid grid-cols-2 md:grid-cols-1">
      {routes.map((route) => (
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

const Route = ({ selected, Icon, title, onClick }) => {
  return (
    <button className={`btn ${!selected && "btn-ghost"}`} onClick={onClick}>
      <Icon />
      <span>{title}</span>
    </button>
  );
};
