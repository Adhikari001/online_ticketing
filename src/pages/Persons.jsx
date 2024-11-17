import AddPerson from "../features/person/AddPerson";
import PersonTable from "../features/person/PersonTable";
import Heading1 from "../ui/Heading1";

function Persons() {
  return (
    <>
      <Heading1>Persons</Heading1>
      <AddPerson />
      <PersonTable />
    </>
  );
}

export default Persons;
