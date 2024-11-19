import { HiArrowRightOnRectangle } from "react-icons/hi2";
import CloseSidebarButton from "./CloseSidebarButton";
import UserAvatar from "./UserAvatar";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../utils/auth";
import { useQueryClient } from "@tanstack/react-query";

export default function Header({ showSidebar, toggleShowSidebar }) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  function logout() {
    removeAuthToken();
    queryClient.invalidateQueries();
    queryClient.refetchQueries();
    navigate("/login", { replace: true });
  }

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
      <button onClick={logout}>
        <HiArrowRightOnRectangle color="#4f46e5" size={20} />
      </button>
    </header>
  );
}
