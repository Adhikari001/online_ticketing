import { HiXMark } from "react-icons/hi2";

function Modal({ children, toggleShowModal }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 backdrop-blur-sm transition-all">
      {/* modal */}
      <div className="fixed max-h-[95vh] top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] bg-gray-50 rounded-lg shadow-lg px-14 py-10 overflow-auto">
        <button
          className="bg-none border-none p-2 rounded-sm translate-x-2 transition-all duration-200 absolute top-6 right-8 "
          onClick={toggleShowModal}
        >
          <HiXMark className="w-5 h-5 text-gray-500 hover:text-gray-900" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default Modal;
