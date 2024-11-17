import { securedGetRequest, securedRequestWithBody } from "../utils/helper";
import { ADD_PERSON, GET_ALL_PERSON } from "./apiRoutes";

export async function addUpdatePersonApi(body) {
  return securedRequestWithBody({
    endPoint: ADD_PERSON,
    method: body.id ? "PUT" : "POST",
    requestBody: body,
  });
}

export async function getAllPerson() {
  return securedGetRequest({
    endPoint: GET_ALL_PERSON,
  });
}
