import AddPersonForm from "./AddPersonForm";
import ButtonPrimary from "../../ui/ButtonPrimary";
import useRoles from "../role/useRoles";
import Modal from "../../ui/Modal";

function AddPerson() {
  const { roles, isLoading } = useRoles();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <Modal.Window name="add-person">
        <AddPersonForm roles={roles} />
      </Modal.Window>
      <Modal.Open opens="add-person">
        <ButtonPrimary>Add Person </ButtonPrimary>
      </Modal.Open>
    </>
  );
}

export default AddPerson;
