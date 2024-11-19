import { securedRequestWithBody } from "../utils/helper";
import { PATIENT_ADD_VISIT_REQUEST } from "./apiRoutes";

export async function addPatientComplaintApi(body) {
  return securedRequestWithBody({
    endPoint: PATIENT_ADD_VISIT_REQUEST,
    method: body.id ? "PUT" : "POST",
    requestBody: body,
  });
}
