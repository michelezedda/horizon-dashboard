import { motion } from "motion/react";

function Sidebar() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        className="theme-mode overflow-y-auto sticky top-4 h-[calc(100dvh-32px-48px)] rounded-2xl p-4"
      >
        Sidebar
      </motion.div>
    </>
  );
}

export default Sidebar;
