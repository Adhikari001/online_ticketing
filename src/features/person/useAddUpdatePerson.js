import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUpdatePersonApi } from "../../service/apiPerson";
import toast from "react-hot-toast";

export default function useAddUpdatePerson() {
  const queryClient = useQueryClient();

  const { mutate: addUpdatePerson, isPending } = useMutation({
    mutationFn: addUpdatePersonApi,
    onSuccess: (body) => {
      toast.success(body.message);
      queryClient.invalidateQueries(["person"]);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { addUpdatePerson, isPending };
}
