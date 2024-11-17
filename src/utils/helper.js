import { getAuthToken } from "./auth";

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const validatePassword = (password) => {
  if (password == null) return false;
  const regex = new RegExp(
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/
  );
  return regex.test(password);
};

export async function securedGetRequest({ endPoint }) {
  const token = getAuthToken();
  try {
    const response = await fetch(endPoint, {
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
    if (typeof error.message === "string") throw new Error(error.message);
    throw new Error("Something went wrong");
  }
}

export async function securedRequestWithBody({
  endPoint,
  requestBody,
  method,
}) {
  const token = getAuthToken();
  try {
    const response = await fetch(endPoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(requestBody),
    });

    const responseBody = await response.json();

    if (response.status === 200) {
      return responseBody;
    }
    throw new Error(responseBody.message);
  } catch (error) {
    if (typeof error.message === "string") throw new Error(error.message);
    throw new Error("Something went wrong");
  }
}
