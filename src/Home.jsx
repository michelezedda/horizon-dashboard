import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";
import Footer from "./components/Footer";
import useLocalStorage from "./localStorage/useLocalStorage";
import { useLogin } from "./store/store";

function Home() {
  const [theme, setTheme] = useLocalStorage("theme", "cupcake");
  const { login } = useLogin();

  const handleTheme = () => {
    setTheme(theme === "cupcake" ? "forest" : "cupcake");
  };

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
