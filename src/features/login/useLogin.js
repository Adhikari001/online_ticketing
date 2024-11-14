import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../../service/useAuth";

export default function useLogin() {
  const { mutate: login, isLoading: isLoggingIn } = useMutation({
    mutationFn: loginApi,
    onSuccess: (body) => {
      console.log(body);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { login, isLoggingIn };
}
