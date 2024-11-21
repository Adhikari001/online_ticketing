import { useNavigate, useRouteError } from "react-router-dom";
import Heading1 from "../ui/Heading1";
import ButtonPrimary from "../ui/ButtonPrimary";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = "Something went wrong!";
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <div className="p-11 flex flex-col gap-10">
      <Heading1>{title}</Heading1>
      <p>{message}</p>
      <ButtonPrimary onClick={() => navigate(-1)}>GO Back</ButtonPrimary>
    </div>
  );
}

export default Error;
