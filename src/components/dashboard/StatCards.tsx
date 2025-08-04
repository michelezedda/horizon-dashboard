import { IoFootsteps, IoBarbell, IoStopwatch } from "react-icons/io5";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import type { CardProps } from "../../types/types.tsx";

function StatCards() {
  return (
    <>
      <div className="flex flex-col xl:flex-row justify-center items-center mt-4 gap-2">
        <Card
          Icon={IoFootsteps}
          title="Steps"
          value="571"
          pillText="2.75%"
          trend="up"
          period="Today"
        />
        <Card
          Icon={IoBarbell}
          title="Exercise"
          value="44 min"
          pillText="13.01%"
          trend="down"
          period="Today"
        />
        <Card
          Icon={IoStopwatch}
          title="Stand"
          value="6 hr"
          pillText="40.75%"
          trend="up"
          period="Today"
        />
      </div>
    </>
  );
}

export default StatCards;

const Card = ({
  Icon = FiCircle,
  title,
  value,
  pillText,
  trend,
  period,
}: CardProps) => {
  return (
    <>
      <div className="p-4 border-stone-300 col-span-4 border rounded w-full">
        <div className="flex mb-8 items-start justify-between">
          <div className="flex gap-1.5">
            <Icon />
            <div className="flex flex-col">
              <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
              <p className="text-3xl font-semibold">{value}</p>
            </div>
          </div>
          <span
            className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
              trend === "up"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
            {pillText}
          </span>
        </div>
        <p className="text-xd text-stone-500">{period}</p>
      </div>
    </>
  );
};
