import Sun from "../public/icons/sun.svg";
import Moon from "../public/icons/moon.svg";
import cs from "classnames";

import { useAppSelector, useAppDispatch } from "../hooks";

import { setTheme } from "../slices/themeSlice";
import { useEffect } from "react";

const ThemeSwitch = () => {
  const darkTheme = useAppSelector((state) => state.theme.darkTheme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setClassTheme(darkTheme);
  }, [darkTheme]);

  return (
    <div
      className="relative cursor-pointer h-7 w-7"
      onClick={() => dispatch(setTheme({ darkTheme: !darkTheme }))}
    >
      {darkTheme ? (
        <div className={cs("h-full w-full absolute left-0 top-0 text-black")}>
          <Moon />
        </div>
      ) : (
        <div className={cs("h-full w-full absolute left-0 top-0 text-golden")}>
          <Sun />
        </div>
      )}
    </div>
  );
};

export default ThemeSwitch;

function setClassTheme(darkTheme: boolean) {
  const d = document.documentElement;
  const themes = ["light", "dark"];
  d.classList.remove(...themes);
  if (darkTheme) {
    d.setAttribute("class", "dark");
  } else {
    d.setAttribute("class", "light");
  }
}
