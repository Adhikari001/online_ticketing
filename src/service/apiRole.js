import { getAuthToken, removeAuthToken } from "../utils/auth";
import { ROLE_GET_ALL } from "./apiRoutes";

export async function getAllRoles() {
  const token = getAuthToken();
  try {
    const response = await fetch(ROLE_GET_ALL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const body = await response.json();

    if (response.status === 200) {
      return body;
    } else if (response.status === 401) {
      removeAuthToken();
    }
    throw new Error(body.message);
  } catch (error) {
    if (typeof error.message === "string") throw new Error(error.message);
    throw new Error("Something went wrong");
  }
}
