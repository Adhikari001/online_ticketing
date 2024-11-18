import Modal from "../../ui/Modal";
import AddPerson from "./AddPerson";
import PersonPagination from "./PersonPagination";

function PersonHeadingButtons() {
  return (
    <div className="flex gap-2 justify-end flex-wrap w-full">
      <Modal>
        <AddPerson />
        <PersonPagination />
      </Modal>
    </div>
  );
}

export default PersonHeadingButtons;
