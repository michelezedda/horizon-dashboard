import { FiCalendar, FiDollarSign, FiHome, FiUsers } from "react-icons/fi";

function RouteSelect() {
  const routes = ["Dashboard", "Calendar", "Team", "Finance"];

  switch (routes) {
    case routes[0]:
      //
      break;
    case routes[1]:
      //
      break;
    case routes[2]:
      //
      break;
    case routes[3]:
      //
      break;
    default:
    //
  }

  return (
    <>
      <div className="space-y-1 mt-4">
        <Route Icon={FiHome} selected={true} title={routes[0]} />
        <Route Icon={FiCalendar} selected={false} title={routes[1]} />
        <Route Icon={FiUsers} selected={false} title={routes[2]} />
        <Route Icon={FiDollarSign} selected={false} title={routes[3]} />
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
