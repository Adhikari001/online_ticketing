import { HiEye } from "react-icons/hi2";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-3">
      <p className="flex flex-col  gap-1 items-start">
        <label htmlFor="username">Username:</label>
        <input
          className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
          type="text"
          id="username"
          name="username"
          autoComplete="username"
        />
      </p>
      <p className="flex flex-col  gap-1 items-start">
        <label htmlFor="password">Password</label>
        <div className="relative w-full">
          <input
            className="border-solid border-2 border-gray-600 rounded-md pl-2 pr-6 py-1 w-full "
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
          />
          <button className="absolute top-2.5 right-2">
            <HiEye />
          </button>
        </div>
      </p>

      <button
        type="submit"
        className="border-2 rounded-md bg-gray-300 px-4 py-1 hover:bg-gray-400 w-min m-auto disabled:cursor-not-allowed disabled:bg-slate-100"
      >
        Login
      </button>
    </form>
  );
}
