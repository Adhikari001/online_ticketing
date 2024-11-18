import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import useLogin from "./useLogin";
import ButtonPrimary from "../../ui/ButtonPrimary";

export default function LoginForm() {
  const { login, isPending, error: apiError } = useLogin();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  function toggleShowPassword(e) {
    e.preventDefault();
    setShowPassword((showPassword) => !showPassword);
  }

  function formSubmitted(e) {
    e.preventDefault();
    if (isFormValid()) {
      login({ username, password });
    }
  }

  function isFormValid() {
    if (!username || !password) {
      setError("Username and name is required");
      return false;
    }
    // if (!validateEmail(username)) {
    //   setError("Email not valid");
    //   return false;
    // }
    // if (!validatePassword(password)) {
    //   setError("Create a stronger password");
    // }
    return true;
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={formSubmitted}>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {apiError && <p className="text-sm text-red-500">{apiError.message}</p>}
      <div className="flex flex-col  gap-1 items-start">
        <label htmlFor="username">Username:</label>
        <input
          className="border-solid border-2 border-gray-600 rounded-md px-2 py-1 w-full"
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          autoComplete="username"
          disabled={isPending}
        />
      </div>
      <div className="flex flex-col  gap-1 items-start">
        <label htmlFor="password">Password</label>
        <div className="relative w-full">
          <input
            className="border-solid border-2 border-gray-600 rounded-md pl-2 pr-6 py-1 w-full "
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isPending}
          />
          <button
            className="absolute top-2.5 right-2 disabled:bg-red-500"
            onClick={toggleShowPassword}
            disabled={isPending}
            type="button"
          >
            {showPassword ? <HiEye /> : <HiEyeSlash />}
          </button>
        </div>
      </div>

      <ButtonPrimary type="submit">Login</ButtonPrimary>
    </form>
  );
}
