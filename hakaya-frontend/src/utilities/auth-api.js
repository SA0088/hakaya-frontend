import sendRequest from "./sendRequest";

const BASE_URL = "/auth";

export function register(data) {
  return sendRequest(`${BASE_URL}/register`, "POST", data);
}

export function login(data) {
  return sendRequest(`${BASE_URL}/login`, "POST", data);
}
