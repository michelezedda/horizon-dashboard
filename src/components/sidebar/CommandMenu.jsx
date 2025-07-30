import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useLogin } from "../../store/store";
import { IoChatboxEllipses } from "react-icons/io5";
import { CgLogOut, CgDarkMode } from "react-icons/cg";

export const CommandMenu = ({ open, setOpen, theme, handleTheme }) => {
  const [value, setValue] = useState("");
  const { setLogin } = useLogin();
  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 z-10 bg-stone-950/50"
      onClick={() => setOpen(false)}
      data-theme={theme}
    >
      <div
        className="rounded-2xl shadow-lg border p-4 overflow-hidden w-full max-w-lg mx-auto mt-12 bg-neutral-500/80"
        onClick={(e) => e.stopPropagation()}
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative border-b p-3 text-lg w-full focus:outline-none rounded-2xl"
          data-theme={theme}
        />
        <Command.List>
          <Command.Empty>
            No results for <span className="font-semibold">{value}</span>
          </Command.Empty>

          <Command.Group>
            <Command.Item className="btn flex mt-2">
              <IoChatboxEllipses />
              Contact support
            </Command.Item>
            <button className="btn w-full mt-2" onClick={handleTheme}>
              <Command.Item className="flex items-center gap-2">
                <CgDarkMode />
                Change theme
              </Command.Item>
            </button>
            <button
              className="btn w-full mt-2"
              onClick={() => {
                setLogin(false);
              }}
            >
              <Command.Item className="flex items-center gap-2">
                <CgLogOut />
                Log out
              </Command.Item>
            </button>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
