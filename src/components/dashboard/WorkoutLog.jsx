import ActivityGraph from "./ActivityGraph";

function WorkoutLog() {
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-2">Workout Log</h1>
        <div className="mt-4">
          <ActivityGraph />
        </div>
      </div>
    </>
  );
}

export default WorkoutLog;
