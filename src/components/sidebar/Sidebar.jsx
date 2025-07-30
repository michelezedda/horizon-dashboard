import { motion } from "motion/react";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import { useLogin } from "../../store/store";
import { useState } from "react";

function Sidebar({ theme, handleTheme }) {
  const [open, setOpen] = useState(false);
  const { setLogin } = useLogin();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="overflow-hidden md:overflow-y-auto sticky z-30 top-4 md:h-[calc(100dvh-32px-48px)] rounded-2xl drop-shadow-xl md:drop-shadow-none border-b border-neutral-300 md:border-none md:shadow-lg"
        data-theme={theme}
      >
        <div className="flex justify-center shadow-sm p-1.5">
          <div className="btn btn-ghost btn-d w-30 py-6">
            {/* Mobile btn */}
            <img
              src={`${
                theme === "forest"
                  ? "/media/logo-white.png"
                  : "/media/logo-black.png"
              }`}
              alt="horizon logo"
              onClick={() => setOpen(!open)}
              className="md:hidden"
            />
            {/* Desktop btn */}
            <img
              src={`${
                theme === "forest"
                  ? "/media/logo-white.png"
                  : "/media/logo-black.png"
              }`}
              alt="horizon logo"
              className="hidden md:flex"
            />
          </div>
        </div>
        {/* Mobile sidebar */}
        <div className={`p-2 ${open ? "visible" : "hidden"} md:hidden`}>
          <Search theme={theme} handleTheme={handleTheme} />
          <RouteSelect />
          <div className="md:absolute bottom-2 left-0 p-2 w-full">
            <button
              className="btn btn-outline w-full"
              onClick={() => {
                setLogin(false);
              }}
            >
              Log out
            </button>
          </div>
        </div>
        {/* Desktop sidebar */}
        <div className="p-2 hidden md:flex md:flex-col">
          <Search theme={theme} handleTheme={handleTheme} />
          <RouteSelect />
          <div className="md:absolute bottom-2 left-0 p-2 w-full">
            <button
              className="btn btn-outline w-full"
              onClick={() => {
                setLogin(false);
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Sidebar;
