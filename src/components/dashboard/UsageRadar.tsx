import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import { usageData } from "../../data/usageData.js";

function UsageRadar() {
  return (
    <>
      <div className="overflow-hidden rounded border border-stone-400 basis-2/6">
        <div className="p-4">
          <h3 className="flex items-center gap-1.5 font-medium">
            <FiEye /> Workouts
          </h3>
        </div>
        <div className="h-64 px-4">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={usageData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar
                name="Mike"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default UsageRadar;
