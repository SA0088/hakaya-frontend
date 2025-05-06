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
  
// export async function getLikedExperiences(userId) {
//     const res = await fetch(`/experiences/liked/${userId}`);
//     return res.json();
// }
// export function getLikeReview(id) {
//   return sendRequest(`/api/reviews/${id}/toggle_like/`, 'POST');
// }

export function toggleLikeExperience(id) {
  return sendRequest(`/experiences/${id}/like/`, 'PUT');
}

export function toggleLikeReview(id) {
  return sendRequest(`/reviews/${id}/like/`, 'PUT');
}

// exp-api.js
export async function getById(id) {
  return sendRequest(`${url}${id}/`);
}
  
  
export async function addReview(experienceId, formData) {
    return sendRequest(`${url}${experienceId}/reviews/`, "POST", formData)
}

export async function update(formData, catId) {
  return sendRequest(`${url}${catId}/`, "PUT", formData)
}

export async function deleteCat(catId) {
  return sendRequest(`${url}${catId}/`, "DELETE")
}