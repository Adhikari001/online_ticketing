import { HiArrowRightOnRectangle } from "react-icons/hi2";
import UserAvatar from "../features/UserAvatar";
import CloseSidebarButton from "./CloseSidebarButton";

export default function Header({ showSidebar, toggleShowSidebar }) {
  return (
    <header className="bg-gray-50 py-2 px-2 border-b border-gray-100 border-solid flex gap-2.5 items-center justify-between ">
      <div className="flex items-center gap-4">
        {!showSidebar && (
          <CloseSidebarButton
            showSidebar={showSidebar}
            toggleShowSidebar={toggleShowSidebar}
          />
        )}
        <UserAvatar />
      </div>
      <button>
        <HiArrowRightOnRectangle color="#4f46e5" size={20} />
      </button>
    </header>
  );
}
