import { securedGetRequest } from "../utils/helper";
import { DASHBOARD } from "./apiRoutes";

export async function getDashboardDataApi(duration) {
  return await securedGetRequest({
    endPoint: DASHBOARD + "?duration=" + duration,
  });
}
