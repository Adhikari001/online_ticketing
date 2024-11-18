import PersonHeadingButtons from "../features/person/PersonHeadingButtons";
import PersonTable from "../features/person/PersonTable";
import Heading1 from "../ui/Heading1";

function Persons() {
  return (
    <>
      <Heading1>Persons</Heading1>
      <PersonHeadingButtons />
      <PersonTable />
    </>
  );
}

export default Persons;
