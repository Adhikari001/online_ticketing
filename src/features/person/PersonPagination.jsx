import ButtonSecondary from "../../ui/ButtonSecondary";
import Modal from "../../ui/Modal";
import PersonPaginationForm from "./PersonPaginationForm";

function PersonPagination() {
  return (
    <>
      <Modal.Window name="pagination">
        <PersonPaginationForm />
      </Modal.Window>
      <Modal.Open opens="pagination">
        <ButtonSecondary>Pagination </ButtonSecondary>
      </Modal.Open>
    </>
  );
}

export default PersonPagination;
