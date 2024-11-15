import { useQuery } from "@tanstack/react-query";
import { getAllRoles } from "../../service/apiRole";
import toast from "react-hot-toast";

export default function useRoles() {
  const {
    data: roles = [],
    isLoading,
    error,
  } = useQuery({
    queryFn: getAllRoles,
    queryKey: ["role"],
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { roles, isLoading, error };
}
