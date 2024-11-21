import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getDashboardDataApi } from "../../service/apiDashboard";

export default function useDashboard() {
  const [searchParam] = useSearchParams();

  const duration = searchParam.get("duration") || "months";

  const {
    data: dashboard = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard", duration],
    queryFn: () => getDashboardDataApi(duration),
  });

  return { dashboard, isLoading, isError };
}
