// import { redirect } from "react-router-dom";

export function getAuthToken() {
  return localStorage.getItem("token");
}

export function setAuthToken(token) {
  return localStorage.setItem("token", token);
}

// export function checkAuth() {
//   const token = getAuthToken();
//   if (!token) {
//     return redirect("/login");
//   }
// }

export function removeAuthToken() {
  localStorage.removeItem("token");
}
