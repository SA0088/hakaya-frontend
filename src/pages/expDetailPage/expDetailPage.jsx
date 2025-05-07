// // // // import "./styles.css";
// // // import explore from "../../assets/images/1.png"

// // // export default function ExpIndexPage() {
// // //     return (<>
// // //         <section className="page-header">
// // //         <div className="header-content">
// // //             <img src={explore} alt="explore" className="header-icon" />
// // //             <div>
// // //             <h1>Step Into a World of Experiences</h1>
// // //             <p>Embark on a journey of discovery and joy, where every experience tells a new story.</p>
// // //             </div>
// // //         </div>
// // //         </section>

// // //     </>)
// // // }


// // // import "./styles.css";
// // import { useState, useEffect } from "react";
// // import { useParams } from "react-router";


// // export default function expDetailPage() {
// //     const [expDetail, setexpDetail] = useState(null);
// //     const { id } = useParams();

// //     useEffect(() => { 
// //         async function getAndSetDetail() {
// //             try {
// //                 const exp = await expAPI.show();
// //                 setexpDetail(exp);
// //             } catch (err) {
// //                 console.log(err);
// //                 setexpDetail(null);
// //             }
// //         }
// //         if (id) getAndSetDetail()
// //     }, [id])

// //     if (!expDetail) return <h3>Experience details will display soon</h3>

// //     return (
// //         <section className="detail-exp-container">
// //           <div className="detail-exp-img">
// //             <img src={skaterexp} alt="A skater boy exp" />
// //           </div>
// //           <div className="exp-details">
// //             <h1>{ expDetail.title }</h1>
// //             <h2>{ expDetail.creator.name }</h2>
// //             <p>{ expDetail.summary}</p>
// //             <p><small>{expDetail.created_at}</small></p>
            
// //           </div>
// //         </section>
// //     )
// // }
// // import { useParams } from "react-router";
// // import { useEffect, useState } from "react";
// // import * as expAPI from "../../utilities/exp-api";
// // import Reviewform from "../../components/ReviewForm/ReviewForm";

// // export default function ExpDetailPage() {
// //   const { id } = useParams();
// //   const [experience, setExperience] = useState(null);
// //   const [reviews, setReviews] = useState([])

// //   useEffect(() => {
// //     async function fetchExp() {
// //       try {
// //         const data = await expAPI.getById(id); // تأكد أن لديك دالة getById في exp-api
// //         setExperience(data);
// //       } catch (err) {
// //         console.error("Error loading experience:", err);
// //       }
// //     }

// //     fetchExp();
// //   }, [id]);

// //   async function addReview(formData) {
// //     try {
// //       const newReview = await expAPI.addReview(experience.id, formData);
// //       setReviews([...reviews, newReview])
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }

// //   console.log(experience)


// //   if (!experience) return <p>Loading...</p>;

// //   return (
// //       <div className="exp-detail-container">
// //         <img
// //           // src={`http://localhost:8000${experience.image}`}
// //           alt={experience.title}
// //           className="exp-detail-image"
// //         />
// //         <h1 className="exp-detail-title">{experience.title}</h1>
// //         <p className="exp-detail-creator">creator: {experience.creator?.username}</p>
// //         <p className="exp-detail-summary">{experience.summary}</p>
// //         <div className="exp-review-form">
// //           <Reviewform addReview={addReview} />
// //         </div>
// //       </div>
// //   );
// // }
// // import { useParams , Link } from "react-router";
// // import { useEffect, useState } from "react";
// // import * as expAPI from "../../utilities/exp-api";
// // import Reviewform from "../../components/ReviewForm/ReviewForm";
// // import "./ExpDetailPage.css"; // تأكد أنك أنشأت هذا الملف ووضعت فيه تنسيقات CSS

// // export default function ExpDetailPage() {
// //   const { id } = useParams();
// //   const [experience, setExperience] = useState(null);
// //   const [reviews, setReviews] = useState([]);

// //   useEffect(() => {
// //     async function fetchExp() {
// //       try {
// //         const data = await expAPI.getById(id);
// //         setExperience(data);
// //         setReviews(data.reviews || []); // تحميل التعليقات من التجربة
// //       } catch (err) {
// //         console.error("Error loading experience:", err);
// //       }
// //     }

// //     fetchExp();
// //   }, [id]);

// //   async function addReview(formData) {
// //     try {
// //       const newReview = await expAPI.addReview(experience.id, formData);
// //       setReviews([...reviews, newReview]);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   }

// //   if (!experience) return <p>Loading...</p>;

// //   return (
// //     <div className="exp-detail-container">
// //       <img
// //         src={experience.image_path} 
// //         alt={experience.title}
// //         className="exp-detail-image"
// //       />
// //       <h1 className="exp-detail-title">{experience.title}</h1>
// //       <p className="exp-detail-creator">creator: {experience.creator?.username}</p>
// //       <p className="exp-detail-summary">{experience.summary}</p>
// //       <div className="experience-actions">
// //         <Link to={`/experiences/edit/${experience.id}`} className="btn warn">Edit</Link>
// //         <Link to={`/experiences/confirm_delete/${experience.id}`} className="btn danger">Delete</Link>
// //         {/* <Link to={`/experiences/edit/${experienceDetail.id}`} class="btn warn">Edit</Link>
// //         <Link to={`/experiences/confirm_delete/${experienceDetail.id}`} class="btn danger">Delete</Link> */}
// //       </div>
// //       <div className="exp-review-form">
// //         <h2 className="review-section-title">Add a Review</h2>
// //         <Reviewform addReview={addReview} />
// //       </div>

// //       <div className="review-list">
// //         <h2 className="review-section-title">Reviews</h2>
// //         {reviews.length === 0 ? (
// //           <p className="no-reviews">No reviews yet.</p>
// //         ) : (
// //           reviews.map((review, idx) => (
// //             <div key={idx} className="review-card">
// //               <p className="review-user">{review.user?.username || "Anonymous"}:</p>
// //               <label>Comment : </label>
// //               <p className="review-text">{review.comment}</p>
// //               <label>Rate (1-5) : </label>
// //               <p className="review-number">{review.rate}</p>

// //             </div>
// //           ))
// //         )}
// //       </div>
      
// //     </div>
// //   );
// // }
// import { useParams, Link } from "react-router";
// import { useEffect, useState } from "react";
// import * as expAPI from "../../utilities/exp-api";
// import ReviewForm from "../../components/ReviewForm/ReviewForm";
// import "./ExpDetailPage.css"; // تأكد أنك أنشأت هذا الملف ووضعت فيه تنسيقات CSS

// export default function ExpDetailPage() {
//   const { id } = useParams();
//   const [experience, setExperience] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const currentUser = JSON.parse(localStorage.getItem("user")); // اجلب المستخدم الحالي من localStorage
//   const [loadingReviewId, setLoadingReviewId] = useState(null);
//   // const isOwner = currentUser?.id === experience.creator?.id;

//   useEffect(() => {
//     async function fetchExp() {
//       try {
//         const data = await expAPI.getById(id);
//         setExperience(data);
//         setReviews(data.reviews || []); // تحميل التعليقات من التجربة
//       } catch (err) {
//         console.error("Error loading experience:", err);
//       }
//     }

//     fetchExp();
//   }, [id]);

//   async function addReview(formData) {
//     try {
//       const newReview = await expAPI.addReview(experience.id, formData);
//       setReviews([...reviews, newReview]);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function handleLikeExperience() {
//     try {
//       const res = await expAPI.toggleLikeExperience(experience.id);
//       setExperience({
//         ...experience,
//         isLiked: res.message === 'Experience liked.',
//         likes_count: res.likes_count
//       });
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   // async function handleLikeReview(reviewId) {
//   //   try {
//   //     const res = await expAPI.toggleLikeReview(reviewId);
//   //     setReviews(reviews.map(r =>
//   //       r.id === reviewId ? {
//   //         ...r,
//   //         isLiked: res.message === 'Review liked.',
//   //         likes_count: res.likes_count
//   //       } : r
//   //     ));
//   //   } catch (err) {
//   //     console.error(err);
//   //   }
//   // }


//   async function handleLikeReview(reviewId) {
//     setLoadingReviewId(reviewId);
//     try {
//       const res = await expAPI.toggleLikeReview(reviewId);
//       setReviews(reviews.map(r =>
//         r.id === reviewId ? {
//           ...r,
//           isLiked: res.message === 'Review liked.',
//           likes_count: res.likes_count
//         } : r
//       ));
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoadingReviewId(null);
//     }
//   }
//   async function handleDelete() {
//     const confirm = window.confirm("Are you sure you want to delete this experience?");
//     if (confirm) {
//       try {
//         await expAPI.deleteExperienceById(id);
//         navigate("/"); // أو إلى قائمة الفئات
//       } catch (err) {
//         console.error("Failed to delete:", err);
//       }
//     }
//   }

//   if (!experience) return <p>Loading...</p>;

//   return (
//     <div className="exp-detail-container">
//       <img
//         src={experience.image_path}
//         alt={experience.title}
//         className="exp-detail-image"
//       />
//       <h1 className="exp-detail-title">{experience.title}</h1>
//       {/* <p className="exp-detail-creator">Creator: {experience.creator?.username}</p> */}
//       <label className="label">Summary:</label>
//       <p className="exp-detail-summary"> {experience.summary}</p>
//       <p className="exp-detail-creator">Creator: {experience.creator?.username}</p>
//       <p className="exp-detail-category">Category: {experience.category.name}</p>
//       <p className="exp-detail-create">create at: {experience.created_at}</p>
      

//       {/* فقط المستخدم الذي أنشأ التجربة يمكنه تعديلها أو حذفها */}
//       {currentUser?.id === experience.creator?.id && (
//         <div className="experience-actions">
//           <Link to={`/experiences/edit/${experience.id}`} className="btn warn">Edit</Link>
//           <Link to={`/experiences/confirm_delete/${experience.id}`} className="btn danger">Delete</Link>
//         </div>
//       )}
//       {/* {isOwner && (
//         <div className="owner-actions">
//           <button onClick={() => navigate(`/experiences/${id}/edit`)}>Edit</button>
//           <button onClick={handleDelete}>Delete</button>
//         </div>
//       )} */}
//       <button onClick={handleLikeExperience} className="like-button">
//         {experience.isLiked ? '❤️' : '🤍'} {experience.likes_count}
//       </button>
//       <div className="exp-review-form">
//         <h2 className="review-section-title">Add a Review</h2>
//         <ReviewForm addReview={addReview} />
//       </div>

//       <div className="review-list">
//         <h2 className="review-section-title">Reviews</h2>
//         {reviews.length === 0 ? (
//           <p className="no-reviews">No reviews yet.</p>
//         ) : (
//           reviews.map((review, idx) => (
//             <div key={idx} className="review-card">
//               <p className="review-user">{review.user?.username || "Anonymous"}:</p>
//               <label>Comment:</label>
//               <p className="review-text">{review.comment}</p>
//               <label>Rate (1-5):</label>
//               <p className="review-number">{review.rate}</p>
//               <button
//                 onClick={() => handleLikeReview(review.id)}
//                 className="like-button"
//                 disabled={loadingReviewId === review.id}
//               >
//                 {review.isLiked ? '❤️' : '🤍'} {review.likes_count}
//               </button>
//             </div>
            
//           ))
//         )}


//       </div>
//     </div>
//   );
// }
// أعلى الملف:
import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as expAPI from "../../utilities/exp-api";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./expDetailPage.css";

export default function ExpDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingReviewId, setLoadingReviewId] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchExp() {
      try {
        const data = await expAPI.getById(id);
        setExperience(data);
        setReviews(data.reviews || []);
      } catch (err) {
        console.error("Error loading experience:", err);
      }
    }
    fetchExp();
  }, [id]);

  const isOwner = currentUser?.id === experience?.creator?.id;

  // async function addReview(formData) {
  //   try {
  //     const newReview = await expAPI.addReview(experience.id, formData);
  //     setReviews([...reviews, newReview]);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  async function addReview(formData) {
    try {
        const response = await fetch(`/experiences/${experience.id}/reviews/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`  // إضافة التوكن إذا كنت تستخدم التوثيق
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit review');
        }

        const data = await response.json();
        console.log('Review submitted successfully:', data);
    } catch (error) {
        console.error('Error adding review:', error);
    }
}

  async function handleLikeExperience() {
    try {
      const res = await expAPI.toggleLikeExperience(experience.id);
      setExperience({
        ...experience,
        isLiked: res.message === 'Experience liked.',
        likes_count: res.likes_count
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLikeReview(reviewId) {
    setLoadingReviewId(reviewId);
    try {
      const res = await expAPI.toggleLikeReview(reviewId);
      setReviews(reviews.map(r =>
        r.id === reviewId ? {
          ...r,
          isLiked: res.message === 'Review liked.',
          likes_count: res.likes_count
        } : r
      ));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingReviewId(null);
    }
  }

  async function handleDelete() {
    const confirm = window.confirm("Are you sure you want to delete this experience?");
    if (confirm) {
      try {
        await expAPI.deleteExperienceById(id);
        navigate("/");
      } catch (err) {
        console.error("Failed to delete:", err);
      }
    }
  }

  if (!experience) return <p>Loading...</p>;

  return (
    <div className="exp-detail-container">
      <img src={experience.image_path} alt={experience.title} className="exp-detail-image" />
      <h1 className="exp-detail-title">{experience.title}</h1>
      <h2 className="label">Summary:</h2>
      <p className="exp-detail-summary">{experience.summary}</p>
      {/* <h5 className="exp-detail-creator">Creator: {experience.creator?.username}</h5> */}

      <div className="div-detail">      <p className="exp-detail-category">Creator: {experience.creator?.username}</p>
      <p className="exp-detail-category">Category: {experience.category.name}</p>
      <p className="exp-detail-create">Created at: {experience.created_at}</p></div>


      {isOwner && (
        <div className="owner-actions">
          <button onClick={() => navigate(`/experiences/${id}/edit`)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}

      <button onClick={handleLikeExperience} className="like-button">
        {experience.isLiked ? '❤️' : '🤍'} {experience.likes_count}
      </button>
      <hr></hr>
      <div className="exp-review-form">
        <h2 className="review-section-title">Add a Review</h2>
        <ReviewForm addReview={addReview} />
      </div>

      <div className="review-list">
        <h2 className="review-section-title">Reviews</h2>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="review-card">
              <p className="review-user">{review.user?.username || "Anonymous"}:</p>
              <label>Comment:</label>
              <p className="review-text">{review.comment}</p>
              <label>Rate (1-5):</label>
              <p className="review-number">{review.rate}</p>
              <button
                onClick={() => handleLikeReview(review.id)}
                className="like-button"
                disabled={loadingReviewId === review.id}
              >
                {review.isLiked ? '❤️' : '🤍'} {review.likes_count}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
