import StatCards from "./StatCards";
import ActivityGraph from "../ActivityGraph";
import UsageRadar from "./UsageRadar";
import RecentTransactions from "./RecentTransactions";

function Grid() {
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col px-4 gap-2">
        <h2 className="mt-6 text-xl">
          Today is <span className="font-semibold">{today}</span>
        </h2>
        <StatCards />
        <div className="flex flex-col lg:flex-row gap-2">
          <ActivityGraph />
          <UsageRadar />
        </div>
        <RecentTransactions />
      </div>
    </>
  );
}

export default Grid;
