import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

function CloseSidebarButton({ showSidebar, toggleShowSidebar }) {
  return (
    <button onClick={toggleShowSidebar}>
      {showSidebar ? (
        <HiOutlineXMark size={25} color="#9ca3af" />
      ) : (
        <HiBars3 size={25} color="#9ca3af" />
      )}
    </button>
  );
}

export default CloseSidebarButton;
