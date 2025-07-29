import { motion } from "motion/react";

function Sidebar({ theme }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.1 },
        }}
        className="theme-mode overflow-y-auto sticky top-4 h-[calc(100dvh-32px-48px)] rounded-2xl shadow-lg"
        data-theme={theme}
      >
        Sidebar
      </motion.div>
    </>
  );
}

export default Sidebar;
