import { motion } from "motion/react";
import Search from "./Search";
import RouteSelect from "./RouteSelect";

function Sidebar({ theme }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="overflow-y-auto sticky top-4 h-[calc(100dvh-32px-48px)] rounded-2xl p-4"
        data-theme={theme}
      >
        <div className="border-b border-stone-200 h-13">Horizon Dashboard</div>
        <Search theme={theme} />
        <RouteSelect />
      </motion.div>
    </>
  );
}

export default Sidebar;
