import { useSearchParams } from "react-router-dom";

export function usePatients() {
  const [searchParam] = useSearchParams();
}
