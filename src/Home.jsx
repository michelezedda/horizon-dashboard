import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import { useLogin } from "./store/store";
import useLocalStorage from "./localStorage/useLocalStorage";

function Home() {
  const { login } = useLogin();
  const [theme, setTheme] = useLocalStorage("theme", "cupcake");

  // Toggle between 'cupcake' and 'forest' themes
  const handleTheme = () => {
    setTheme(theme === "cupcake" ? "forest" : "cupcake");
  };

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
