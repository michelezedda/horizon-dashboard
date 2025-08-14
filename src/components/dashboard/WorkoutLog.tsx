import ActivityGraph from "./ActivityGraph.js";

function WorkoutLog() {
  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-semibold mt-2">Workout Log</h1>
        <div className="mt-4">
          <ActivityGraph />
        </div>
      </section>
    </>
  );
}

export default WorkoutLog;
