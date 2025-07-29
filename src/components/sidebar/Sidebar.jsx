import { motion } from "motion/react";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import { Link } from "react-router-dom";
import { useLogin } from "../../store/store";

function Sidebar({ theme }) {
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
        className="overflow-y-auto md:sticky top-4 md:h-[calc(100dvh-32px-48px)] rounded-2xl p-3"
        data-theme={theme}
      >
        <div className="flex justify-center">
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
        <hr className="border border-stone-200" />
        <Search theme={theme} />
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
      </motion.div>
    </>
  );
}

export default Sidebar;
