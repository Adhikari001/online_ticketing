import PersonTableBody from "./PersonTableBody";
import { usePersons } from "./usePersons";
import Spinner from "../../ui/Spinner";

function PersonTable() {
  const { persons, isLoading } = usePersons();
  if (isLoading) return <Spinner />;

  return (
    <table className="w-full relative border-solid border border-gray-400 rounded-md bg-gray-50 ">
      <thead>
        <tr className="w-full grid grid-cols-person-table items-center transition-none px-6 py-3 border-b-2 border-gray-200 uppercase font-semibold text-gray-600">
          <th></th>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <PersonTableBody persons={persons.data} />
    </table>
  );
}

export default PersonTable;
