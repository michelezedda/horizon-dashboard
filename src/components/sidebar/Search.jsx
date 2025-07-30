import { useState } from "react";
import { CommandMenu } from "./CommandMenu";

function Search({ theme, handleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <label className="input mt-4 w-full" data-theme={theme}>
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>
      <CommandMenu
        open={open}
        setOpen={setOpen}
        theme={theme}
        handleTheme={handleTheme}
      />
    </>
  );
}

export default Search;
