import ButtonSecondary from "../../ui/ButtonSecondary";
import Modal from "../../ui/Modal";
import FilterForm from "./FilterForm";

function Filter() {
  return (
    <>
      <Modal.Window name="filter">
        <FilterForm />
      </Modal.Window>
      <Modal.Open opens="filter">
        <ButtonSecondary>Change</ButtonSecondary>
      </Modal.Open>
    </>
  );
}

export default Filter;
