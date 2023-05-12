import Menu from "../assets/Menu.svg";
import Close from "../assets/Close.svg";

import { useState } from "react";

import { Logo } from "./Logo";
import Sidebar from "./Sidebar";

import classNames from "classnames";

const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  function closeMenu() {
    setIsActive(!isActive);
  }

  return (
    <div className={classNames(isActive && "fixed", "min-w-full")}>
      <header className="w-full h-full py-5 px-6 flex justify-center items-center gap-5 border-b bg-gray-700 border-gray-600 lg:justify-between">
        <Logo />
        <div className="hidden gap-3 lg:flex">
          <span>Aulas</span>
          <button
            onClick={() => setIsActive(!isActive)}
            type="button">
            {!isActive ? (
              <img
                src={Menu}
                alt="Menu"
                className="h-6 w-6 hover:text-blue-400"
              />
            ) : (
              <img
                src={Close}
                alt="Fechar menu"
              />
            )}
          </button>
        </div>
      </header>

      <div
        className={classNames(
          !isActive && "hidden opacity-0 transition-all",
          "min-h-screen w-full bg-gray-700"
        )}>
        <Sidebar closeMenu={closeMenu} />
      </div>
    </div>
  );
};

export default Header;
