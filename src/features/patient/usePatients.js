import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/const";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllPatient } from "../../service/apiPatient";

export function usePatients() {
  const queryClient = useQueryClient();
  const [searchParam] = useSearchParams();

  //filter
  const search = searchParam.get("search") || "";
  const pageParam = Number(searchParam.get("page"));
  const page = pageParam >= 1 ? pageParam : 1;
  const pageSizeParam = Number(searchParam.get("pageSize"));
  const pageSize =
    pageSizeParam >= 1 && pageSizeParam <= 100
      ? Number(searchParam.get("pageSize"))
      : PAGE_SIZE;
  // || ??
  const filter = searchParam.get("filter") ?? "all";
  const sortParam = searchParam.get("sort") ?? "addedDate-asc";
  const sortParameter = sortParam.split("-")[0];
  const sort = sortParam.split("-")[1] === "desc" ? "descending" : "ascending";

  //query
  const {
    data: { data: patients, totalPage, totalData, pageNumber } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      "patient",
      "list",
      search,
      page,
      pageSize,
      filter,
      sortParameter,
      sort,
    ],
    queryFn: () =>
      getAllPatient({
        search,
        page,
        pageSize,
        status: filter,
        sortParameter,
        sort,
      }),
  });

  if (page > 1) {
    queryClient.prefetchQuery({
      queryKey: [
        "patient",
        "list",
        search,
        page - 1,
        pageSize,
        filter,
        sortParameter,
        sort,
      ],
      queryFn: () =>
        getAllPatient({
          search,
          page: page - 1,
          pageSize,
          status: filter,
          sortParameter,
          sort,
        }),
    });
  }

  if (page < totalPage) {
    queryClient.prefetchQuery({
      queryKey: [
        "patient",
        "list",
        search,
        page + 1,
        pageSize,
        filter,
        sortParameter,
        sort,
      ],
      queryFn: () =>
        getAllPatient({
          search,
          page: page + 1,
          pageSize,
          status: filter,
          sortParameter,
          sort,
        }),
    });
  }

  return {
    patients,
    totalPage,
    totalData,
    pageNumber,
    pageSize,
    isLoading,
    isError,
  };
}
