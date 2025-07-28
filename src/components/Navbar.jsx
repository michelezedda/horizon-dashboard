import { useSelectedUser, useLogin } from "../store/store";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navbar({ theme, handleTheme }) {
  const { selectedUser } = useSelectedUser();
  const { login, setLogin } = useLogin();

  return (
    <>
      <nav className="navbar rounded-t-2xl shadow-sm">
        <div className="flex-1">
          <Link to={"/"} className="btn btn-ghost w-30 py-6">
            <img
              src={`${
                theme === "forest"
                  ? "/media/logo-white.png"
                  : "/media/logo-black.png"
              }`}
              alt="horizon logo"
            />
          </Link>
        </div>
        {login && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="dropdown dropdown-end btn btn-ghost p-0"
            role="button"
            tabIndex={0}
          >
            <h2 className="mr-2 pl-2">
              Welcome <span className="font-bold">{selectedUser}</span>
            </h2>
            <div className="btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="icon" src="/media/icon1.jpg" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-12 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li
                  onClick={() => {
                    setLogin(false);
                  }}
                >
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
        <label className="toggle text-base-content mx-2">
          <input
            type="checkbox"
            value="synthwave"
            className="theme-controller"
            onChange={handleTheme}
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </nav>
    </>
  );
}

export default Navbar;
