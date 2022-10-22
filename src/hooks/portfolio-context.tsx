import React from "react";

const PortfolioContext = React.createContext({
  handleTheme: (theme: string): void => {},
  isSelectedTheme: false,
  defaultTheme: localStorage.getItem("theme"),
  // handleData,
  // data,
  // singleData,
  // handleModelData,
  // isOpen,
  // setIsOpen,
});

export default PortfolioContext;
