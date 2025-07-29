import Navbar from "./Navbar";
import { useSelectedUser, useLogin } from "../store/store";
import users from "../data/users";
import { useState } from "react";
import { motion } from "motion/react";
import MyCalendar from "./MyCalendar";

function Dashboard({ theme, handleTheme }) {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, setLogin } = useLogin();
  const { selectedUser, setSelectedUser, password, setPassword } =
    useSelectedUser();

  const handleUserLogin = (e) => {
    e.preventDefault();

    if (password === "password") {
      setLoading(true);
      setTimeout(() => {
        setLogin(true);
        setLoading(false);
      }, 1000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLogin(false);
        setLoading(false);
        setLoginError(true);
      }, 1000);
    }
  };

  if (!login) {
    return (
      <>
        <div className="theme-mode rounded-2xl shadow-lg" data-theme={theme}>
          <div className="w-max-full">
            <Navbar theme={theme} handleTheme={handleTheme} />
            <div className="flex flex-col justify-start items-center">
              <img
                src={`${
                  theme === "forest"
                    ? "/media/dashboard-logo-white.png"
                    : "/media/dashboard-logo-black.png"
                }`}
                alt="horizon logo"
              />
              <div className="flex flex-col justify-center items-center mt-6 gap-2 text-xl">
                <p>Select user</p>
                <form className="flex flex-col gap-2 mb-20">
                  <select
                    value={selectedUser || ""}
                    className="select w-100"
                    onChange={(e) =>
                      setSelectedUser(JSON.parse(e.target.value))
                    }
                  >
                    <option value="" disabled>
                      Pick a user
                    </option>
                    {users.map((user) => (
                      <option key={user.id} value={JSON.stringify(user)}>
                        {user.name}
                      </option>
                    ))}
                  </select>
                  {selectedUser && (
                    <input
                      type="password"
                      placeholder="Your password"
                      className="input w-100"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  )}
                  {loading ? (
                    <button className="btn">
                      <span className="loading loading-spinner"></span>
                      loading
                    </button>
                  ) : (
                    <button
                      className="btn btn-error"
                      disabled={!selectedUser || !password}
                      onClick={handleUserLogin}
                    >
                      Log In
                    </button>
                  )}
                  {loginError && (
                    <div role="alert" className="alert alert-error alert-soft">
                      <span>Passwords do NOT match! Try again.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
        }}
        className="theme-mode rounded-2xl shadow-lg h-max-[100dvh]"
        data-theme={theme}
      >
        <div>
          <Navbar theme={theme} handleTheme={handleTheme} />
          <MyCalendar />
        </div>
      </motion.div>
    </>
  );
}

export default Dashboard;
