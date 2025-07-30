import { FiUser } from "react-icons/fi";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { activityData } from "../../data/activityData";

function ActivityGraph() {
  return (
    <div className="overflow-hidden rounded border border-stone-300 basis-3/4">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser />
          Activity
        </h3>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={activityData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ActivityGraph;
