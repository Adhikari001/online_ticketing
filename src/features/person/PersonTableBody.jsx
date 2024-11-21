import { MdUpdate } from "react-icons/md";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import AddPersonForm from "./AddPersonForm";
import useRoles from "../role/useRoles";
import Spinner from "../../ui/Spinner";

function PersonTableBody({ persons }) {
  const { roles, isLoading } = useRoles();
  if (isLoading) return <Spinner />;
  return (
    <tbody>
      {persons?.map((person, count) => {
        return (
          <tr
            key={person.id}
            className="w-full grid grid-cols-person-table items-center transition-none px-6 py-3 border-b-2 border-gray-200 font-normal text-gray-600 break-all"
          >
            <td className="w-4">
              <Modal>
                <Menus.Menu>
                  <Menus.Toggle id={person.id} />
                  <Menus.List id={person.id} subtract={180}>
                    <Modal.Open opens="update-person">
                      <Menus.Button icon={<MdUpdate />}>
                        Update Person
                      </Menus.Button>
                    </Modal.Open>
                  </Menus.List>
                </Menus.Menu>
                <Modal.Window name="update-person">
                  <AddPersonForm roles={roles} person={person} />
                </Modal.Window>
              </Modal>
            </td>
            <td>{++count}</td>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.gender}</td>
            <td>{person.phoneNumber}</td>
            <td>{person.email}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PersonTableBody;
