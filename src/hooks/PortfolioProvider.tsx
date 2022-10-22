import React, { useEffect, useState } from "react";
import PortfolioContext from "./portfolio-context";

type Props = {
  children?: React.ReactNode;
};

const PortfolioProvider = ({ children }: Props) => {
  const [isSelectedTheme, setIsSelectedTheme] = useState(false);
  const [defaultTheme, setDefaultTheme] = useState(
    localStorage.getItem("theme")
  );

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setIsSelectedTheme(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setIsSelectedTheme(true);
      themeValue === "light" && setIsSelectedTheme(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (theme: string): void => {
    if (theme === "light") {
      setIsSelectedTheme(false);
      localStorage.setItem("theme", "light");
      setDefaultTheme("light");
    } else {
      setIsSelectedTheme(true);
      localStorage.setItem("theme", "dark");
      setDefaultTheme("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  return (
    <PortfolioContext.Provider
      value={{ isSelectedTheme, handleTheme, defaultTheme }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
