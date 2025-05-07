import sendRequest from "./sendRequest";
const BASE_URL = '/categories/';

export async function index() {
    return sendRequest(BASE_URL)
}

export async function show(catId) {
    return sendRequest(`${url}${catId}/`)
}

export async function getCategoryWithExperiences(id) {
    return sendRequest(`${BASE_URL}${id}/experiences`);
  }