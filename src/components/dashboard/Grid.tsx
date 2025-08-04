import StatCards from "./StatCards.js";
import ActivityGraph from "./ActivityGraph.js";
import UsageRadar from "./UsageRadar.js";
import RecentTransactions from "./RecentTransactions.js";

function Grid() {
  const today = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="mt-2 text-xl">
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
