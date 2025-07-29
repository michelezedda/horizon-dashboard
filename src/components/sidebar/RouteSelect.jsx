import { FiCalendar, FiDollarSign, FiHome, FiUsers } from "react-icons/fi";

function RouteSelect() {
  return (
    <>
      <div className="space-y-1 mt-4">
        <Route Icon={FiHome} selected={true} title="Dashboard" />
        <Route Icon={FiCalendar} selected={false} title="Calendar" />
        <Route Icon={FiUsers} selected={false} title="Team" />
        <Route Icon={FiDollarSign} selected={false} title="Finance" />
      </div>
    </>
  );
}

export default RouteSelect;

const Route = ({ selected, Icon, title }) => {
  return (
    <button className={`btn ${!selected && "btn-ghost"}`}>
      <Icon />
      <span>{title}</span>
    </button>
  );
};
