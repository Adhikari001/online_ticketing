function Stat({ icon, title, value, iconBackground, onClick }) {
  return (
    <div
      onClick={() => onClick?.()}
      className="cursor-pointer bg-gray-50  border-solid border-2 border-gray-300 rounded-md p-4 grid grid-cols-[3.2rem,1fr] grid-rows-[1.6rem,1.6rem] gap-x-4 gap-y-1.5"
    >
      <div
        className={`row-span-2 aspect-square rounded-full flex items-center justify-center ${iconBackground}`}
      >
        {icon}
      </div>
      <h5 className="self-end text-sm uppercase tracking-wider font-semibold text-gray-500">
        {title}
      </h5>
      <p className="text-2xl font-medium leading-none text-center">{value}</p>
    </div>
  );
}

export default Stat;
