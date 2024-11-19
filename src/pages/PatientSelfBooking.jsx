import PatientSelfBookingForm from "../features/patientSelfBooking/PatientSelfBookingForm";
import Heading2 from "../ui/Heading2";

function PatientSelfBookingPage() {
  return (
    <main className="h-screen flex flex-col content-center justify-center gap-14 px-3 max-w-md m-auto">
      <Heading2>Please enter your information</Heading2>
      <PatientSelfBookingForm />
    </main>
  );
}

export default PatientSelfBookingPage;
