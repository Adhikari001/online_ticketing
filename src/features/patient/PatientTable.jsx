import Spinner from "../../ui/Spinner";
import TableFooter from "../../ui/TableFooter";
import PatientTableBody from "./PatientTableBody";
import { usePatients } from "./usePatients";

function PatientTable() {
  const {
    patients,
    totalPage,
    totalData,
    pageNumber,
    pageSize,
    isLoading,
    isError,
  } = usePatients();
  if (isError) return <p>Something went wrong...</p>;
  if (isLoading) return <Spinner />;

  return (
    <table className="w-full relative border-solid border border-gray-400 rounded-md bg-gray-50 ">
      <thead>
        <tr className="w-full grid grid-cols-patient-table items-center transition-none px-6 py-3 border-b-2 border-gray-200 uppercase font-semibold text-gray-600">
          <th></th>
          <th></th>
          <th>Patient</th>
          <th>Complaint</th>
          <th>Status</th>
          <th>Doctor</th>
          <th>Added Date</th>
        </tr>
      </thead>
      <PatientTableBody patients={patients} />
      <TableFooter
        totalPage={totalPage}
        totalData={totalData}
        pageNumber={pageNumber}
        pageSize={pageSize}
      />
    </table>
  );
}

export default PatientTable;
