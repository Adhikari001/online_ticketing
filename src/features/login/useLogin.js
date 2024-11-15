import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../service/useAuth";
import toast from "react-hot-toast";
import { setAuthToken } from "../../utils/auth";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (body) => {
      toast.success("Login successful");
      setAuthToken(body.accessToken);
      navigate("/", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { login, isPending, error };
}
