import { AUTHENTICATE } from "../utils/apiRoutes";

export async function loginApi(data) {
  try {
    const response = await fetch(AUTHENTICATE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();

    if (response.status === 200) {
      return body;
    }
    throw new Error(body.message);
  } catch (error) {
    if (typeof error.message === "string") throw new Error(error.message);
    throw new Error("Something went wrong");
  }
}
