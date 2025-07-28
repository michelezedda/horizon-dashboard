import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useSelectedUser, useLogin } from "./store/store";
import users from "./data/users";
import useLocalStorage from "./localStorage/useLocalStorage";
import { useState } from "react";
import { motion } from "motion/react";
import MyCalendar from "./components/MyCalendar";

function Dashboard() {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, setLogin } = useLogin();
  const { selectedUser, setSelectedUser, password, setPassword } =
    useSelectedUser();
  const [theme, setTheme] = useLocalStorage("theme", "cupcake");

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

  const handleTheme = () => {
    setTheme(theme === "cupcake" ? "forest" : "cupcake");
  };

  if (!login) {
    return (
      <>
        <div
          className="theme-mode sm:rounded-2xl shadow-md sm:m-4"
          data-theme={theme}
        >
          <div className="w-max-screen">
            <Navbar theme={theme} handleTheme={handleTheme} />
            <div className="flex flex-col justify-start items-center mx-4 sm:mx-20">
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
                    onChange={(e) => setSelectedUser(e.target.value)}
                  >
                    <option value="" disabled>
                      Pick a user
                    </option>
                    {users.map((user) => (
                      <option key={user.id} value={user.name}>
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
            <Footer />
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
        className="theme-mode sm:rounded-2xl shadow-md sm:m-4"
        data-theme={theme}
      >
        <div className="w-max-screen">
          <Navbar theme={theme} handleTheme={handleTheme} />
          <MyCalendar />
          <Footer />
        </div>
      </motion.div>
    </>
  );
}

export default Dashboard;
