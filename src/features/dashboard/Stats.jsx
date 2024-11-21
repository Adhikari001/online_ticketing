import { useNavigate } from "react-router-dom";
import Stat from "./Stat";
import { HiOutlineUser } from "react-icons/hi";

function Stats({ dashboard }) {
  const navigate = useNavigate();
  return (
    <>
      <Stat
        title="Patients"
        iconBackground="bg-gray-300"
        icon={<HiOutlineUser className="w-8 h-8 text-gray-700" />}
        value={dashboard.totalPatients}
        onClick={() => navigate("/patients")}
      />
      <Stat
        title="New Patients"
        iconBackground="bg-gray-300"
        icon={<HiOutlineUser className="w-8 h-8 text-gray-500" />}
        value={dashboard.totalNewPatients}
        onClick={() => navigate("/patients")}
      />
      <Stat
        title="Patients"
        iconBackground="bg-gray-300"
        icon={<HiOutlineUser className="w-8 h-8 text-gray-700" />}
        value={dashboard.totalPatients}
        onClick={() => navigate("/patients")}
      />
      <Stat
        title="New Patients"
        iconBackground="bg-gray-300"
        icon={<HiOutlineUser className="w-8 h-8 text-gray-700" />}
        value={dashboard.totalNewPatients}
        onClick={() => navigate("/patients")}
      />
    </>
  );
}

export default Stats;
