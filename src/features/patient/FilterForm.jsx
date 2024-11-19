import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/const";
import { useForm } from "react-hook-form";
import Dropdown from "../../ui/Dropdown";

function FilterForm() {
  const [searchParam, setSearchParam] = useSearchParams();
  const searchParamPageSize = Number(searchParam.get("pageSize"));
  const pageSize =
    searchParamPageSize >= 1 && searchParamPageSize <= 100
      ? searchParamPageSize
      : PAGE_SIZE;
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      filter: searchParam.get("filter") || "all",
      sort: searchParam.get("sort") || "addedDate-asc",
      pageSize,
    },
  });

  const { errors } = formState;
  function onSubmit(data) {
    console.log(data);
  }

  function onError(error) {
    console.log(error);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="flex flex-col gap-1.5 w-[50vw] max-w-sm"
    >
      <Dropdown
        label="Filter"
        id="filter"
        error={errors?.filter?.message}
        register={{ ...register("filter") }}
      >
        <option value="all">All</option>
        <option value="requested">Requested</option>
        <option value="canceled">Canceled</option>
        <option value="completed">Completed</option>
      </Dropdown>
    </form>
  );
}

export default FilterForm;
