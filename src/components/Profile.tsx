import useLocalStorage from "../localStorage/useLocalStorage.js";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  feet: number;
  inches: number;
  pounds: number;
  stepsPerDayGoal: number;
  workoutsPerWeekGoal: number;
};

function Profile() {
  const [formData, setFormData] = useLocalStorage<FormData>("profile", {
    firstName: "",
    lastName: "",
    age: 13,
    feet: 0,
    inches: 0,
    pounds: 0,
    stepsPerDayGoal: 10000,
    workoutsPerWeekGoal: 3,
  });

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-4xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h1 className="text-center text-3xl font-semibold mt-2">Profile</h1>
          <div className="flex flex-col mt-4 gap-4 md:gap-2">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">First name</p>
              <input
                type="text"
                placeholder="Insert your first name"
                className="input input-neutral"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Last name</p>
              <input
                type="text"
                placeholder="Insert your last name"
                className="input input-neutral"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Age</p>
              <input
                type="number"
                min="13"
                max="99"
                placeholder="Insert your age"
                className="input input-neutral"
                value={formData.age}
                onChange={(e) =>
                  setFormData({ ...formData, age: Number(e.target.value) })
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Height</p>
              <input
                type="number"
                placeholder="Feet"
                className="input input-neutral"
                value={formData.feet}
                onChange={(e) =>
                  setFormData({ ...formData, feet: Number(e.target.value) })
                }
              />
              <input
                type="number"
                placeholder="Inches"
                className="input input-neutral"
                value={formData.inches}
                onChange={(e) =>
                  setFormData({ ...formData, inches: Number(e.target.value) })
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Weight:</p>
              <input
                type="number"
                placeholder="pounds"
                className="input input-neutral"
                value={formData.pounds}
                onChange={(e) =>
                  setFormData({ ...formData, pounds: Number(e.target.value) })
                }
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Steps-per-day-goal</p>
              <span className="font-medium">
                {formData.stepsPerDayGoal} daily steps
              </span>
              <input
                type="range"
                min="0"
                max="20000"
                value={formData.stepsPerDayGoal}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    stepsPerDayGoal: Number(e.target.value),
                  })
                }
                className="range"
              />
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
              <p className="font-semibold">Workouts-per-week-goal</p>
              <span className="font-medium">
                {formData.workoutsPerWeekGoal} weekly workouts
              </span>
              <input
                type="range"
                min="0"
                max="7"
                value={formData.workoutsPerWeekGoal}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    workoutsPerWeekGoal: Number(e.target.value),
                  })
                }
                className="range"
              />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Profile;
