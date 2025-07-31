import { Cell, Pie, PieChart } from "recharts";
import { pieData } from "../../data/pieData";
import StatCards from "./StatCards";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Goals() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-2">Goals</h1>
        <div className="flex justify-center gap-10 border-1 rounded border-stone-300">
          <PieChart width={300} height={400}>
            <Pie
              data={pieData}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${entry.name}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <div className="flex flex-col justify-center items-start text-xl">
            <p className="text-[#00c49f] font-semibold">Move</p>
            <p className="text-[#0088fe] font-semibold">Exercise</p>
            <p className="text-[#ffbb28] font-semibold">Stand</p>
            <p className="text-[#ff8042] font-semibold">Meditate</p>
          </div>
        </div>
        <StatCards />
      </div>
    </>
  );
}

export default Goals;
