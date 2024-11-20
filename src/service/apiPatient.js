import { securedGetRequest, securedRequestWithBody } from "../utils/helper";
import {
  PATIENT_ADD_VISIT_REQUEST,
  PATIENT_GET_ALL_REQUEST,
} from "./apiRoutes";

export async function addPatientComplaintApi(body) {
  return securedRequestWithBody({
    endPoint: PATIENT_ADD_VISIT_REQUEST,
    method: body.id ? "PUT" : "POST",
    requestBody: body,
  });
}

export async function getAllPatient({
  search,
  page,
  pageSize,
  sort,
  sortParameter,
  status,
}) {
  return securedGetRequest({
    endPoint:
      PATIENT_GET_ALL_REQUEST +
      `?page=${page}&pageSize=${pageSize}&sort=${sort}&sortParameter=${sortParameter}&search=${search}&status=${status}`,
  });
}
