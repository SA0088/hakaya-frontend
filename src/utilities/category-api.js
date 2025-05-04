// // import sendRequest from './sendRequest';

// // const BASE_URL = '/categories/';

// // export function index() {
// //     const res = await sendRequest("/api/categories"); // مثال
// //     const data = await res.json(); // تأكد أن هذا يرجع Array
// //     return data; // لازم يكون data عبارة عن []
// //   }
// // //   return sendRequest(BASE_URL);
// // // }

// import sendRequest from './sendRequest';

// const BASE_URL = '/categories/';

// export async function index() {
//   try {
//     const res = await sendRequest(BASE_URL); // استخدم BASE_URL هنا
//     const data = await res.json(); // تأكد أن هذا يرجع Array
//     return data;
//   } catch (err) {
//     console.error("Error in index:", err);
//     return []; // في حال حدوث خطأ، ارجع مصفوفة فارغة
//   }
// }
import sendRequest from "./sendRequest";
const BASE_URL = '/categories/';

export async function index() {
    return sendRequest(BASE_URL)
}

export async function show(catId) {
    return sendRequest(`${url}${catId}/`)
}