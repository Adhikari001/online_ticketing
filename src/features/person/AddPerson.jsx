import { useState } from "react";

import AddPersonForm from "./AddPersonForm";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useRoles from "../role/useRoles";

function AddPerson() {
  const [showForm, setShowForm] = useState(false);
  const { roles, isLoading } = useRoles();

  function toggleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <ButtonPrimary onClick={toggleShowForm}>Show Form </ButtonPrimary>
      {showForm && <AddPersonForm roles={roles} />}
    </>
  );
}

export default AddPerson;
