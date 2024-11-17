const BASE_URL = "http://localhost:8080/api/v1";

const AUTH = BASE_URL + "/auth";
export const AUTHENTICATE = AUTH + "/authenticate";

const ROLE = BASE_URL + "/role";
export const ROLE_GET_ALL = ROLE + "/get-all";

const PERSON = BASE_URL + "/person";
export const ADD_PERSON = PERSON + "/add";
export const GET_ALL_PERSON = PERSON + "/get-all";
