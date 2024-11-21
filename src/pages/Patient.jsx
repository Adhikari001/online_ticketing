import { useParams } from "react-router-dom";

function Patient() {
  const { patientId } = useParams();
  return <div>{patientId}</div>;
}

export default Patient;
