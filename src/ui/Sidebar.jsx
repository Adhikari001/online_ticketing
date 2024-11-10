import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import NavItem from "./NavItem";
import CloseSidebarButton from "./CloseSidebarButton";

function Sidebar({ showSidebar, toggleShowSidebar }) {
  return (
    <aside className="z-20 bg-gray-50 border-solid border-2 border-gray-100 h-screen overflow-x-clip">
      <div className="p-2">
        <CloseSidebarButton
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />
      </div>
      <nav>
        <ul className="flex flex-col gap-2 pt-8 ">
          <NavItem to="/" linkName="Home">
            <HiOutlineHome color="#4b5563" size={20} />
          </NavItem>
          <NavItem to="/patients" linkName="Patients">
            <HiOutlineUser color="#4b5563" size={20} />
          </NavItem>
          <NavItem to="/settings" linkName="Settings">
            <HiOutlineCog6Tooth color="#4b5563" size={20} />
          </NavItem>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
