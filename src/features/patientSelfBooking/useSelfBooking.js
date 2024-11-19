import { useMutation } from "@tanstack/react-query";
import { addPatientComplaintApi } from "../../service/apiPatient";
import toast from "react-hot-toast";

export default function useSelfBooking() {
  const { mutate: addSelfBooking, isPending } = useMutation({
    mutationFn: addPatientComplaintApi,
    onSuccess: (body) => {
      toast.success(body.message);
    },
  });
  return { addSelfBooking, isPending };
}
