import { useQuery } from "@tanstack/react-query";
import { getAllPerson } from "../../service/apiPerson";

export function usePersons() {
  //read params
  const {
    data: persons,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["person", "list"],
    queryFn: getAllPerson,
  });

  return { persons, isLoading, isError };
}
