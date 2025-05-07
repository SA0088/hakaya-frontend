import sendRequest from '/src/utilities/sendRequest.js';

const BASE_URL = "http://localhost:8000";
const url = "/experiences/";

/* =======================
   Experience Functions
========================== */

// Get all experiences
export async function index() {
  return sendRequest(url);
}

// Get experience by ID
export async function getById(id) {
  return sendRequest(`${url}${id}/`);
}

// Create a new experience
export async function create(formData) {
  return sendRequest(url, "POST", formData);
}

// Update an existing experience
export async function update(formData, expId) {
  return sendRequest(`/experiences/${expId}/`, "PUT", formData);
}

// Delete an experience
export function deleteExp(id) {
  return sendRequest(`/experiences/${id}/`, 'DELETE');
}

export async function deleteExperienceById(id) {
  return sendRequest(`/experiences/${id}/`, 'DELETE');
}

// Get experiences by category
export async function getExperiencesByCategory(categoryId) {
  return sendRequest(`/categories/${categoryId}/experiences/`);
}

// Get experiences created by a specific user
export async function getUserExperiences(userId) {
  return sendRequest(`/experiences/users/${userId}`);
}

/* =======================
   Review Functions
========================== */

// Add a review to an experience
export async function addReview(id, reviewData) {
  try {
    const response = await sendRequest(`/experiences/${id}/reviews/`, "POST", reviewData);
    return response;
  } catch (error) {
    console.error("Error adding review:", error);
  }
}

// Toggle like on a review
export async function toggleLikeReview(reviewId) {
  return sendRequest(`/reviews/${reviewId}/like/`, 'PUT');
}

/* =======================
   Like Functions
========================== */

// Toggle like on an experience
export async function toggleLikeExperience(id) {
  return sendRequest(`/experiences/${id}/liked/`, 'PUT');
}

// Get liked experiences for the current user
export async function getLikedExperiences() {
  return sendRequest(`${url}users/liked`);
}

/* =======================
   User Functions
========================== */

// Get the current user's profile
export function getUserProfile() {
  return sendRequest('/users/profile/');
}
