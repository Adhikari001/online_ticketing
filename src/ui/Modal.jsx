import { cloneElement, createContext, useContext, useState } from "react";
import { HiXMark } from "react-icons/hi2";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 backdrop-blur-sm transition-all">
      {/* modal */}
      <div className="fixed max-h-[95vh] top-1/2 left-1/2  translate-x-[-50%] translate-y-[-50%] bg-gray-50 rounded-lg shadow-lg px-14 py-10 overflow-auto">
        <button
          className="bg-none border-none p-2 rounded-sm translate-x-2 transition-all duration-200 absolute top-6 right-8 "
          onClick={close}
        >
          <HiXMark className="w-5 h-5 text-gray-500 hover:text-gray-900" />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
