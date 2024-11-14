import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import { validateEmail, validatePassword } from "../../utils/helper";
import useLogin from "./useLogin";

export default function LoginForm() {
  const { login, isLoggingIn } = useLogin();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState();
  const [error, setError] = useState("");
  function toggleShowPassword(e) {
    e.preventDefault();
    setShowPassword((showPassword) => !showPassword);
  }

  function formSubmitted(e) {
    e.preventDefault();
    if (isFormValid()) {
      console.log("i am here");
      login({ username, password });
    }
  }

  function isFormValid() {
    if (!username || !password) {
      setError("Username and name is required");
      return false;
    }
    if (!validateEmail(username)) {
      setError("Email not valid");
      return false;
    }
    if (!validatePassword(password)) {
      setError("Create a stronger password");
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={formSubmitted}>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <p className="flex flex-col  gap-1 items-start">
        <label htmlFor="username">Username:</label>
        <input
          className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          autoComplete="username"
          disabled={isLoggingIn}
        />
      </p>
      <p className="flex flex-col  gap-1 items-start">
        <label htmlFor="password">Password</label>
        <div className="relative w-full">
          <input
            className="border-solid border-2 border-gray-600 rounded-md pl-2 pr-6 py-1 w-full "
            type={showPassword ? "password" : "text"}
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoggingIn}
          />
          <button
            className="absolute top-2.5 right-2 disabled:bg-red-500"
            onClick={toggleShowPassword}
            disabled={isLoggingIn}
          >
            {showPassword ? <HiEye /> : <HiEyeSlash />}
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
