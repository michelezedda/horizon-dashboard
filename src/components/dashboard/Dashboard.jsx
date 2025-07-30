import Navbar from "../Navbar";
import { useSelectedUser, useLogin, useSelectedRoute } from "../../store/store";
import users from "../../data/users";
import { useState } from "react";
import { motion } from "motion/react";
import Footer from "../Footer";

function Dashboard({ theme, handleTheme }) {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login, setLogin } = useLogin();
  const { selectedUser, setSelectedUser, password, setPassword } =
    useSelectedUser();
  const { selectedRoute } = useSelectedRoute();

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
        <div className="rounded-2xl shadow-lg" data-theme={theme}>
          <div className="w-max-full p-20">
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
                <form className="flex flex-col gap-2">
                  <select
                    value={selectedUser || ""}
                    className="select w-70"
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
                      className="input w-70"
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
          <div className="flex justify-end p-4">
            <label className="swap swap-rotate" onChange={handleTheme}>
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />
              {/* sun icon */}
              <svg
                className="swap-on h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
              {/* moon icon */}
              <svg
                className="swap-off h-10 w-10 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          <Footer />
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
        className="min-h-screen flex flex-col rounded-2xl shadow-lg"
        data-theme={theme}
      >
        <div className="flex-grow">
          <Navbar theme={theme} handleTheme={handleTheme} />
          <div className="py-4">
            {selectedRoute?.component || <p>Route not found</p>}
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default Dashboard;
