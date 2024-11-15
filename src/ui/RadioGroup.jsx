function RadioGroup({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <p>{label} :</p>
      <div className="flex gap-2 justify-around">{children}</div>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

export default RadioGroup;
