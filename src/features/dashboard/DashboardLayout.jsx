import Spinner from "../../ui/Spinner";
import PatientCharts from "./PatientCharts";
import Stats from "./Stats";
import useDashboard from "./useDashboard";

function DashboardLayout() {
  const { dashboard, isLoading } = useDashboard();
  if (isLoading) <Spinner />;
  console.log(dashboard);
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-9">
        <Stats dashboard={dashboard} />
      </div>
      <PatientCharts patientGraph={dashboard.patientGraph} />
    </>
  );
}

export default DashboardLayout;
