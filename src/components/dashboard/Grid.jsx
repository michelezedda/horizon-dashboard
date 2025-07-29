import StatCards from "./StatCards";
import ActivityGraph from "../ActivityGraph";
import UsageRadar from "./UsageRadar";
import RecentTransactions from "./RecentTransactions";

function Grid() {
  return (
    <>
      <div className="flex flex-col px-4 gap-2">
        <StatCards />
        <div className="flex gap-2">
          <ActivityGraph />
          <UsageRadar />
        </div>
        <RecentTransactions />
      </div>
    </>
  );
}

export default Grid;
