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
          <div className="mx-4 bottom-0">
            <Footer theme={theme} login={login} />
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <main>
        <div className="grid gap-4 p-4 grid-cols-[220px_1fr]">
          <Sidebar theme={theme} />
          <Dashboard theme={theme} handleTheme={handleTheme} />
        </div>
        <div className="mx-4">
          <Footer theme={theme} login={login} />
        </div>
      </main>
    </>
  );
}

export default Home;
