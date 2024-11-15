function Dropdown({ label, id, error, register, children }) {
  return (
    <p className="flex flex-col gap-1 items-start">
      <label htmlFor={id}> {label} :</label>
      <select
        className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
        id={id}
        name={id}
        {...register}
      >
        {children}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </p>
  );
}

export default Dropdown;
