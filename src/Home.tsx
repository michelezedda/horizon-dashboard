import Dashboard from "./components/dashboard/Dashboard.js";
import Sidebar from "./components/sidebar/Sidebar.js";
import { useProfile, useTheme } from "./store/store.js";
import { useEffect } from "react";

function Home() {
  const { login } = useProfile();
  const { theme, setTheme } = useTheme();

  // Toggle between 'cupcake' and 'forest' themes
  const handleTheme = () => {
    setTheme(theme === "cupcake" ? "forest" : "cupcake");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  // If user is not logged in, show only Dashboard
  if (!login) {
    return (
      <>
        <main>
          <div className="gap-4 p-4">
            <Dashboard theme={theme} handleTheme={handleTheme} />
          </div>
        </main>
      </>
    );
  }
  // If user is logged in, show Sidebar alongside Dashboard
  return (
    <>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 p-4 ">
          <Sidebar theme={theme} handleTheme={handleTheme} />
          <Dashboard theme={theme} handleTheme={handleTheme} />
        </div>
      </main>
    </>
  );
}

export default Home;
