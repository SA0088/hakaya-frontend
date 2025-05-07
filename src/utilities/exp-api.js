// import sendRequest  from '/src/utilities/sendRequest.js';
// const url = "/experiences/"

// export async function index() {
//     return sendRequest(url)
// }



// export async function getUserExperiences(userId) {
//     const res = await fetch(`/experiences/user/${userId}`);
//     return res.json();
// }
// // export async function getLikedExperiences() {
// //   const res = await fetch('/experiences/liked', {
// //     headers: {
// //       Authorization: `Bearer ${localStorage.getItem("token")}`,
// //     },
// //   });

// //   if (!res.ok) throw new Error("Failed to fetch liked experiences");

// //   return res.json();
// // }
// // export async function getUserExperiences() {
// //   return sendRequest(`${url}/my-experiences`);
// // }
// export async function getLikedExperiences() {
//   return sendRequest(`${url}user/liked`);
// }


// export function toggleLikeExperience(id) {
//   return sendRequest(`/experiences/${id}/like/`, 'PUT');
// }

// export function toggleLikeReview(id) {
//   return sendRequest(`/reviews/${id}/like/`, 'PUT');
// }

// // exp-api.js

  
  
// export async function addReview(experienceId, formData) {
//     return sendRequest(`${url}${experienceId}/reviews/`, "POST", formData)
// }

// export async function update(formData, catId) {
//   return sendRequest(`${url}${catId}/`, "PUT", formData)
// }

// // export async function deleteCat(catId) {
// //   return sendRequest(`${url}${catId}/`, "DELETE")
// // }

// export async function deleteExperienceById(id) {
//   const res = await fetch(`/experiences/${id}/`, {
//     method: "DELETE",
//     headers: {
//       "Authorization": `Bearer ${localStorage.getItem("token")}` // حسب طريقة التوثيق عندك
//     }
//   });
//   if (!res.ok) throw new Error("Failed to delete experience");
// }
import sendRequest from '/src/utilities/sendRequest.js';

const url = "/experiences/"; // تأكد من أن هذا هو المسار الصحيح
const BASE_URL = "http://localhost:8000"; // Django server

// export async function updateExperience(id, data) {
//   const res = await fetch(`${BASE_URL}/experiences/${id}/`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(data),
//   });
//   if (!res.ok) {
//     throw new Error("Failed to update experience");
//   }
//   return await res.json();
// }

export async function index() {
  return sendRequest(url);
}

export async function getUserExperiences(userId) {
  return sendRequest(`/experiences/users/${userId}`);
}

export async function getLikedExperiences() {
  return sendRequest(`${url}users/liked`);
}
export function getUserProfile() {
  return sendRequest('/users/profile/');
}

// export function getUserExperiences(userId) {
//   return sendRequest(`/api/users/${userId}/experiences/`);
// }

// export function getLikedExperiences() {
//   return sendRequest('/api/experiences/user/liked/');
// }

export function deleteExp(id) {
  return sendRequest(`/experiences/${id}/`, 'DELETE');
}
export async function toggleLikeExperience(id) {
  return sendRequest(`/experiences/${id}/liked/`, 'PUT');
}

export async function deleteExperienceById(id) {
  return sendRequest(`/experiences/${id}/`, 'DELETE');
}

export async function addReview(experienceId, formData) {
  return sendRequest(`${url}${experienceId}/reviews/`, "POST", formData);
}


export async function update(formData, expId) {
  return sendRequest(`${url}${expId}/`, "PUT", formData);
}
export async function getById(id) {
  return sendRequest(`${url}${id}/`);
}
export function show(expId) {
    return sendRequest(`${url}${expId}/`);
}
export async function getExperiencesByCategory(categoryId) {
  const res = await sendRequest(`/categories/${categoryId}/experiences/`);
  console.log(res)
  return res
}
export async function create(formData) {
    return sendRequest(url, "POST", formData)
}