function RadioInput({ label, value, register }) {
  return (
    <p className="flex items-center gap-1 ">
      <input
        className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
        type="radio"
        id={value}
        value={value}
        {...register}
      />
      <label htmlFor={value} className="text-nowrap">
        {label}{" "}
      </label>
    </p>
  );
}

export default RadioInput;
