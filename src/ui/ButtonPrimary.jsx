function ButtonPrimary({ children, onClick, type = "submit" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="border-2 rounded-md bg-gray-300 px-4 py-1 hover:bg-gray-400 w-min mx-auto disabled:cursor-not-allowed disabled:bg-slate-100 text-nowrap"
    >
      {children}
    </button>
  );
}

export default ButtonPrimary;
