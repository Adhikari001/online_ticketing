import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import useDeviceSizeHelper from "../utils/useDeviceSizeHelper";

export default function RootLayout() {
  const { isTablet } = useDeviceSizeHelper();
  const [showSidebar, setShowSidebar] = useState(!isTablet);
  const isShowOverlay = isTablet && showSidebar;

  function toggleShowSidebar() {
    setShowSidebar((curShowSidebar) => !curShowSidebar);
  }

  return (
    <div
      className={showSidebar ? "grid grid-rows-auto-1fr grid-cols-20-1fr " : ""}
    >
      {showSidebar && (
        <Sidebar
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />
      )}
      {isShowOverlay && (
        <div
          className="fixed top-0 left-0 z-10 h-screen w-screen backdrop-brightness-50"
          onClick={toggleShowSidebar}
        />
      )}
      <div
        className={`h-screen w-full flex flex-col ${
          isShowOverlay && "fixed top-0 left-0"
        }`}
      >
        <Header
          showSidebar={showSidebar}
          toggleShowSidebar={toggleShowSidebar}
        />
        <div className="flex flex-col gap-12 bg-gray-200 grow text-gray-700 z-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
