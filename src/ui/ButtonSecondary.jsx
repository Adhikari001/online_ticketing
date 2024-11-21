function ButtonSecondary({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="border-2 rounded-md bg-gray-50 px-4 py-1 hover:bg-gray-300 w-min m-auto disabled:cursor-not-allowed disabled:bg-gray-50 text-nowrap capitalize"
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
