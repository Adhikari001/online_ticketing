const BASE_URL = "http://localhost:8080/api/v1";

//auth
const AUTH = BASE_URL + "/auth";
export const AUTHENTICATE = AUTH + "/authenticate";

//role
const ROLE = BASE_URL + "/role";
export const ROLE_GET_ALL = ROLE + "/get-all";

//person
const PERSON = BASE_URL + "/person";
export const ADD_PERSON = PERSON + "/add";
export const GET_ALL_PERSON = PERSON + "/get-all";
export const GET_AUTHENTICATED_PERSON = PERSON + "/authenticated-person";
