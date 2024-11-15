function Input({ label, type = "text", id, error, register }) {
  return (
    <p className="flex flex-col  gap-1 items-start">
      <label htmlFor={id}>{label} :</label>
      <input
        className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
        type={type}
        id={id}
        name={id}
        {...register}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </p>
  );
}

export default Input;
