import { securedGetRequest, securedRequestWithBody } from "../utils/helper";
import {
  ADD_PERSON,
  GET_ALL_PERSON,
  GET_AUTHENTICATED_PERSON,
} from "./apiRoutes";

export async function addUpdatePersonApi(body) {
  return securedRequestWithBody({
    endPoint: ADD_PERSON,
    method: body.id ? "PUT" : "POST",
    requestBody: body,
  });
}

export async function getAllPerson() {
  return await securedGetRequest({
    endPoint: GET_ALL_PERSON,
  });
}

export async function getAuthenticatedPerson() {
  return await securedGetRequest({ endPoint: GET_AUTHENTICATED_PERSON });
}
