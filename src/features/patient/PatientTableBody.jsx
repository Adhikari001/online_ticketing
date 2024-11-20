function PatientTableBody({ patients }) {
  return (
    <tbody>
      {patients?.map((patient, count) => {
        return (
          <tr
            key={patient.id}
            className="w-full grid grid-cols-patient-table items-center transition-none px-6 py-3 border-b-2 border-gray-200 font-normal text-gray-600 break-all"
          >
            <td></td>
            <td>{++count}</td>
            <td className="text-balance">
              <p>{patient.fullName}</p>
              <p className="text-sm">
                {patient.phoneNumber} {patient.gender} {patient.email}
              </p>
            </td>
            <td>{patient.complaint}</td>
            <td>{patient.visitStatus}</td>
            <td>{patient.assignedDoctorName}</td>
            {/* https://date-fns.org/ */}
            <td>{patient.addedDate}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PatientTableBody;
