import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import PortfolioContext from "../../hooks/portfolio-context";

type Props = {};

const SwitchTheme = (props: Props) => {
  const { handleTheme, isSelectedTheme } = useContext(PortfolioContext);

  if (isSelectedTheme) {
    return (
      <span
        onClick={() => handleTheme("light")}
        className="bg-[#4D4D4D] w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2"
      >
        <FiSun className="text-white text-3xl" />
      </span>
    );
  }
  return (
    <span
      onClick={() => handleTheme("dark")}
      className="bg-white w-[40px] hover:text-white hidden  h-[40px] rounded-full lg:flex justify-center items-center text-black hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer ml-2 "
    >
      <FiMoon className="  text-3xl" />
    </span>
  );
};

export default SwitchTheme;
