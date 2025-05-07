
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router";
// import * as expAPI from "../../utilities/exp-api";
// import * as categoryAPI from "../../utilities/category-api";
// import "./EditExpPage.css"; // استخدم نفس التنسيق

// export default function EditExpPage({user}) {
//   const initialState = {
//     title: "",
//     category: "",
//     summary: "",
//     image_path: "",
//   };

//   const [formData, setFormData] = useState(initialState);
//   const [categories, setCategories] = useState([]);
//   const [currExp, setCurrExp] = useState(null);

//   const { id } = useParams();
//   const navigate = useNavigate();
//   const currentUser = JSON.parse(localStorage.getItem("user"));

//   async function fetchCategories() {
//     try {
//       const data = await categoryAPI.index();
//       if (Array.isArray(data)) {
//         setCategories(data);
//       } else {
//         console.error("Returned categories are not an array.");
//       }
//     } catch (err) {
//       console.log("Error fetching categories:", err);
//     }
//   }

//   async function getAndSetDetail() {
//     try {
//       const exp = await expAPI.getById(id);
//       console.log(exp)
//       console.log(user)
//       // تأكد من أن المستخدم الحالي هو نفس الذي أنشأ التجربة
//       if (exp.creator?.id !== user?.id) {
//         navigate("/experiences"); // ارجع إلى قائمة التجارب إذا لم يكن المستخدم هو المالك
//       } else {
//         setCurrExp(exp);
//         setFormData(exp);
//       }
//     } catch (err) {
//       console.log(err);
//       setCurrExp(null);
//       setFormData(initialState);
//     }
//   }

//   useEffect(() => {
//     fetchCategories();
//     getAndSetDetail();
//     // async function fetchData() {
//     //   try {
//     //     const [exp, cats] = await Promise.all([
//     //       expAPI.show(id),
//     //       categoryAPI.index()
//     //     ]);

//     //     if (exp.creator?.id !== currentUser?.id) {
//     //       navigate("/experiences");
//     //       return;
//     //     }

//     //     setFormData({
//     //       title: exp.title,
//     //       category: exp.category,
//     //       summary: exp.summary,
//     //       image_path: exp.image_path,
//     //     });

//     //     setCategories(Array.isArray(cats) ? cats : []);
//     //   } catch (err) {
//     //     console.error("Error loading experience or categories:", err);
//     //   } finally {
//     //     setLoading(false);
//     //   }
//     // }

//     // fetchData();
//   }, []);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const updatedExp = await expAPI.update(formData, id);
//       navigate(`/experience/${updatedExp.id}`);
//     } catch (err) {
//       console.error("Error updating experience:", err);
//     }
//   }

//   return (
//     <>
//       <div className="page-header1">
//         <h1>Edit an Experience</h1>
//       </div>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <table>
//           <tbody>
//             <tr>
//               <th>
//                 <label htmlFor="id_image">Image URL:</label>
//               </th>
//               <td>
//                 <input
//                   type="text"
//                   id="id_image"
//                   name="image_path"
//                   value={formData.image_path}
//                   onChange={handleChange}
//                   placeholder="Enter image URL"
//                 />
//                 {formData.image_path && (
//                   <img
//                     src={formData.image_path}
//                     alt={formData.title}
//                     className="exp-detail-image mt-2"
//                   />
//                 )}
//               </td>
//             </tr>
//             <tr>
//               <th>
//                 <label htmlFor="id_title">Title:</label>
//               </th>
//               <td>
//                 <input
//                   type="text"
//                   id="id_title"
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   required
//                 />
//               </td>
//             </tr>
//             <tr>
//               <th>
//                 <label htmlFor="id_category">Category:</label>
//               </th>
//               <td>
//                 <select
//                   id="id_category"
//                   name="category"
//                   value={formData.category}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">-- Select a category --</option>
//                   {categories.map((cat) => (
//                     <option key={cat.id} value={cat.id}>
//                       {cat.name}
//                     </option>
//                   ))}
//                 </select>
//               </td>
//             </tr>
//             <tr>
//               <th>
//                 <label htmlFor="id_summary">Summary:</label>
//               </th>
//               <td>
//                 <textarea
//                   id="id_summary"
//                   name="summary"
//                   rows="5"
//                   value={formData.summary}
//                   onChange={handleChange}
//                   required
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//         <button type="submit" className="submit2">
//           Save Changes
//         </button>
//       </form>
//     </>
//   );
// }
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import * as expAPI from "../../utilities/exp-api";
import * as categoryAPI from "../../utilities/category-api";
import "./EditExpPage.css";

export default function EditExpPage({ user }) {
  const initialState = {
    title: "",
    category: "",
    summary: "",
    image_path: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const [currExp, setCurrExp] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchCategories() {
    try {
      const data = await categoryAPI.index();
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        console.error("Returned categories are not an array.");
      }
    } catch (err) {
      console.log("Error fetching categories:", err);
    }
  }

  // async function getAndSetDetail() {
  //   try {
  //     const exp = await expAPI.getById(id);
  //     if (exp.creator?.id !== user?.id) {
  //       navigate("/experiences");
  //     } else {
  //       setCurrExp(exp);
  //       setFormData({
  //         title: exp.title,
  //         category: exp.category.id, // ✅ استخدم الـ ID
  //         summary: exp.summary,
  //         image_path: exp.image_path,
  //       });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setCurrExp(null);
  //     setFormData(initialState);
  //   }
  // }

  async function getAndSetDetail() {
  try {
    const exp = await expAPI.getById(id);
    console.log('Experience:', exp);  // تحقق من التجربة المرسلة من الـ API
    console.log('User ID:', user?.id); // تحقق من الـ ID الخاص بالمستخدم
    console.log('Creator ID:', exp.creator?.id);  // تحقق من الـ ID الخاص بالمبدع
    
    // if (exp.creator?.id !== user?.id) {
      if (!exp.creator?.id || exp.creator.id !== user?.id) {
      console.log('Redirecting to /experiences');
      navigate("/experiences");
    } else {
      setCurrExp(exp);
      setFormData({
        title: exp.title,
        category: exp.category.id, // ✅ استخدم الـ ID
        summary: exp.summary,
        image_path: exp.image_path,
      });
    }
  } catch (err) {
    console.log('Error:', err);
    setCurrExp(null);
    setFormData(initialState);
  }
}

  useEffect(() => {
    fetchCategories();
    getAndSetDetail();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const updatedExp = await expAPI.update(formData, id); // ✅ تأكد من أنك حدثت exp-api.js أيضًا
      navigate(`/experiences/${updatedExp.id}`); // ✅ تحقق من أن المسار صحيح
    } catch (err) {
      console.error("Error updating experience:", err);
    }
  }

  return (
    <>
      <div className="page-header1">
        <h1>Edit Experience</h1>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <th>
                <label htmlFor="id_image">Image URL:</label>
              </th>
              <td>
                <input
                  type="text"
                  id="id_image"
                  name="image_path"
                  value={formData.image_path}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                />
                {formData.image_path && (
                  <img
                    src={formData.image_path}
                    alt={formData.title}
                    className="exp-detail-image mt-2"
                  />
                )}
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="id_title">Title:</label>
              </th>
              <td>
                <input
                  type="text"
                  id="id_title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="id_category">Category:</label>
              </th>
              <td>
                <select
                  id="id_category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select a category --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="id_summary">Summary:</label>
              </th>
              <td>
                <textarea
                  id="id_summary"
                  name="summary"
                  rows="5"
                  value={formData.summary}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit" className="submit2">
          Save Changes
        </button>
      </form>
    </>
  );
}
