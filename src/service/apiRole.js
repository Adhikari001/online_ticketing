import { securedGetRequest } from "../utils/helper";
import { ROLE_GET_ALL } from "./apiRoutes";

export async function getAllRoles() {
  return await securedGetRequest({ endPoint: ROLE_GET_ALL });
}
