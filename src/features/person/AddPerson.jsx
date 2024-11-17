import { useState } from "react";

import AddPersonForm from "./AddPersonForm";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useRoles from "../role/useRoles";
import Modal from "../../ui/Modal";

function AddPerson() {
  const [showModal, setShowModal] = useState(false);
  const { roles, isLoading } = useRoles();

  function toggleShowModal() {
    setShowModal((showModal) => !showModal);
  }

  if (isLoading) return <p>Loading...</p>;
  //compound component
  return (
    <>
      <ButtonPrimary onClick={toggleShowModal}>Show Form </ButtonPrimary>
      {showModal && (
        <Modal toggleShowModal={toggleShowModal}>
          <AddPersonForm roles={roles} toggleShowModal={toggleShowModal} />
        </Modal>
      )}
    </>
  );
}

export default AddPerson;
