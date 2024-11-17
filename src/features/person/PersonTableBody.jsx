function PersonTableBody({ persons }) {
  return (
    <tbody>
      {persons?.map((person, count) => {
        return (
          <tr
            key={person.id}
            className="w-full grid grid-cols-person-table items-center transition-none px-6 py-3 border-b-2 border-gray-200 font-semibold text-gray-600 break-all"
          >
            <td></td>
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
