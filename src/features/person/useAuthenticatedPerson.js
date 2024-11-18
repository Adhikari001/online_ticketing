import { useQuery } from "@tanstack/react-query";
import { getAuthenticatedPerson } from "../../service/apiPerson";

export default function useAuthenticatedPerson() {
  const {
    data: person = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["person", "authenticated"],
    queryFn: getAuthenticatedPerson,
  });

  return { person, isLoading, isError };
}
