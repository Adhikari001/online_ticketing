import { createContext, useContext } from "react";
import { useState } from "react";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { createPortal } from "react-dom";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Menu({ children }) {
  return <div className=" flex items-center justify-end">{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();

    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button
      className="bg-transparent border-none p-2 border-s transition-all translate-x-3 duration-200 hover:bg-gray-300"
      onClick={handleClick}
    >
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, subtract = 0, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;
  const xCor = Math.trunc(position.x - subtract);
  const yCor = Math.trunc(position.y);

  return createPortal(
    <ul
      className=" fixed bg-gray-50 shadow-md border rounded-sm "
      style={{ top: `${yCor}px`, right: `${xCor}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick, disabled }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="w-full text-left bg-none border-none px-4 py-2 text-base  transition-all duration-200 flex items-center gap-3 "
        onClick={handleClick}
        disabled={disabled}
      >
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
