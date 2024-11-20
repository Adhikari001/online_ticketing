import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../../utils/const";
import { useForm } from "react-hook-form";
import Dropdown from "../../ui/Dropdown";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonSecondary from "../../ui/ButtonSecondary";
import ButtonPrimary from "../../ui/ButtonPrimary";
import Input from "../../ui/Input";

function FilterForm({ onCloseModal }) {
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
    searchParam.set("filter", data.filter);
    searchParam.set("sort", data.sort);
    searchParam.set("pageSize", data.pageSize);

    setSearchParam(searchParam);
    onCloseModal?.();
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
      <Dropdown
        label="Order By"
        id="sort"
        error={errors?.sort?.message}
        register={{ ...register("sort") }}
      >
        <option value="addedDate-asc">Added Date (New First)</option>
        <option value="addedDate-desc">Added Date (Old FIrst)</option>
        <option value="updatedDate-asc">Updated Date (New First)</option>
        <option value="updatedDate-desc">Updated Date (Old FIrst)</option>
      </Dropdown>
      <Input
        label="Page Size *"
        type="number"
        id="pageSize"
        error={errors?.pageSize?.message}
        register={{
          ...register("pageSize", {
            required: "Page size is required",
            max: {
              value: 100,
              message: "Page size can not be greater than 100",
            },
            min: {
              value: 5,
              message: "Page size can not be less than 5",
            },
          }),
        }}
      />
      <ButtonGroup>
        <ButtonSecondary type="reset" onClick={() => onCloseModal?.()}>
          Cancel
        </ButtonSecondary>
        <ButtonPrimary type="submit">Submit</ButtonPrimary>
      </ButtonGroup>
    </form>
  );
}

export default FilterForm;
