import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { menuItem } from "../../data/menu";
import NavLink from "./NavLink";
import SwitchTheme from "./SwitchTheme";

type Props = {};

const Header = (props: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const location = useLocation();

  return (
    <div className="z-50">
      <div className="container">
        <header className="flex justify-evenly items-center">
          <nav
            className={`${
              isOpenMenu ? "block dark:bg-black " : "hidden lg:block"
            }`}
          >
            <ul
              className={`${
                isOpenMenu
                  ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-20 z-[22222222222222] w-full bg-white dark:bg-[#1D1D1D] drop-shadow-lg py-4"
                  : "flex my-12 "
              }`}
            >
              {menuItem.map(({ id, link, icon, name }) => (
                <li onClick={() => setIsOpenMenu(false)} key={id}>
                  <NavLink
                    key={id}
                    activeClassName={`${
                      isOpenMenu
                        ? "text-[#FA5252] dark:text-[#FA5252] "
                        : "text-white dark:text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                    }`}
                    inactiveClassName={`${
                      isOpenMenu
                        ? "dark:hover:text-[#FA5252]"
                        : "dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]"
                    }  transition-all duration-300 ease-in-out `}
                    className={`font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out ${
                      location.pathname === "/home" && id === "01"
                        ? "text-white linked dark:text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]"
                        : ""
                    } ${
                      isOpenMenu
                        ? "pl-4 dark:text-white hover:text-[#FA5252] dark:hover:text-[#FA5252]"
                        : "rounded-md cursor-pointer font-poppins bg-white text-gray-lite"
                    }`}
                    to={link}
                  >
                    <span className="mr-2 text-xl">{icon}</span> {name}
                  </NavLink>
                </li>
              ))}

              {/* dark mode */}
              <SwitchTheme />
            </ul>
          </nav>
        </header>
        {<Outlet />}
      </div>
    </div>
  );
};

export default Header;
