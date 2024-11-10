import { NavLink } from "react-router-dom";

function NavItem({ children, to, linkName }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex gap-2 items-center transion ease-in-out duration-300 p-2 rounded-xl ${
            isActive
              ? "translate-x-2 bg-gray-300"
              : "hover:translate-x-2 hover:bg-gray-300"
          }`
        }
      >
        {children}
        <span className="text-gray-600 font-medium">{linkName}</span>
      </NavLink>
    </li>
  );
}

export default NavItem;
