import { getAuthToken, removeAuthToken } from "../utils/auth";
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
  const token = getAuthToken();
  try {
    const response = await fetch(GET_AUTHENTICATED_PERSON, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const body = await response.json();

    if (response.status === 200) {
      return body;
    }
    throw new Error(body.message);
  } catch (error) {
    if (error instanceof TypeError && error.message === "Failed to fetch") {
      removeAuthToken();
      location.reload();
    }
    if (typeof error.message === "string") throw new Error(error.message);
    throw new Error("Something went wrong");
  }
}
