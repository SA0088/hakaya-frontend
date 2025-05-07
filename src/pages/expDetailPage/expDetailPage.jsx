import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import * as expAPI from "../../utilities/exp-api";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import "./expDetailPage.css";

export default function ExpDetailPage({ currentUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [loadingReviewId, setLoadingReviewId] = useState(null);

  useEffect(() => {
    async function fetchExp() {
      try {
        const data = await expAPI.getById(id);
        setExperience(data.experiences);
        setReviews(data.reviews);
      } catch (err) {
        console.error("Error loading experience:", err);
      }
    }
    fetchExp();
  }, [id]);

  const addReview = async (reviewData) => {
    try {
      const response = await expAPI.addReview(experience.id, reviewData);
      setReviews([...reviews, response]);
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  async function handleLikeExperience() {
    try {
      const res = await expAPI.toggleLikeExperience(experience.id);
      setExperience({
        ...experience,
        isLiked: res.message === "Experience liked.",
        likes_count: res.likes_count,
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function handleLikeReview(reviewId) {
    setLoadingReviewId(reviewId);
    try {
      const res = await expAPI.toggleLikeReview(reviewId);
      setReviews(
        reviews.map((r) =>
          r.id === reviewId
            ? {
                ...r,
                isLiked: res.message === "Review liked.",
                likes_count: res.likes_count,
              }
            : r
        )
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingReviewId(null);
    }
  }

  if (!experience) return <p>Loading...</p>;

  return (
    <div className="exp-detail-container">
      <img
        src={experience.image_path}
        alt={experience.title}
        className="exp-detail-image"
      />
      <h1 className="exp-detail-title">{experience.title}</h1>
      <h2 className="label">Summary:</h2>
      <p className="exp-detail-summary">{experience.summary}</p>

      <div className="div-detail">
        <p className="exp-detail-category">
          Creator: {experience.creator?.username}
        </p>
        <p className="exp-detail-category">
          Category: {experience.category.name}
        </p>
        <p className="exp-detail-create">
          Created at: {experience.created_at}
        </p>
      </div>

      <button onClick={handleLikeExperience} className="like-button">
        {experience.isLiked ? "❤️" : "🤍"} {experience.likes_count}
      </button>

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
              <p className="review-user">
                {review.user?.username || "Anonymous"}:
              </p>
              <label>Comment:</label>
              <p className="review-text">{review.comment}</p>
              <label>Rate (1-5):</label>
              <p className="review-number">{review.rate}</p>
              <button
                onClick={() => handleLikeReview(review.id)}
                className="like-button"
                disabled={loadingReviewId === review.id}
              >
                {review.isLiked ? "❤️" : "🤍"} {review.likes_count}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
