import Heading1 from "../../ui/Heading1";
import Modal from "../../ui/Modal";
import Search from "../../ui/Search";
import AddPatient from "./AddPatient";
import Filter from "./Filter";

function PatientHeading() {
  return (
    <div className="flex w-full justify-between items-center">
      <Heading1>Patient</Heading1>
      <div className="flex gap-3">
        <Modal>
          <Search />
          <Filter />
          <AddPatient />
        </Modal>
      </div>
    </div>
  );
}

export default PatientHeading;
