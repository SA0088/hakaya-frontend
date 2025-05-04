import sendRequest  from '/src/utilities/sendRequest.js';
const url = "/experiences/"

export async function index() {
    return sendRequest(url)
}
export function show(expId) {
    return sendRequest(`${url}${expId}/`);
}
export async function create(formData) {
    return sendRequest(url, "POST", formData)
}

export async function getUserExperiences(userId) {
    const res = await fetch(`/experiences/user/${userId}`);
    return res.json();
  }
  
  export async function getLikedExperiences(userId) {
    const res = await fetch(`/experiences/liked/${userId}`);
    return res.json();
  }
  