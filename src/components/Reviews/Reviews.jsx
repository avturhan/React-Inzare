import React, { useState } from "react";
import "./reviews.modules.scss";

const reviewsData = [
  {
    name: "Анна К.",
    rating: 4,
    text: "Отличная минеральная вода! Чувствуется естественный вкус и чистота. Очень понравилась для повседневного употребления.",
    date: "22 октября 2021",
  },
  {
    name: "Иван И.",
    rating: 4,
    text: "Доставка всегда вовремя, а вода — свежая и охлажденная. Спасибо за вашу работу и качественную продукцию!",
    date: "22 октября 2021",
  },
  // Add more reviews as necessary
];

const Reviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(5);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 1,
    text: "",
    date: new Date().toLocaleDateString(),
  });

  const loadMoreReviews = () => {
    setVisibleReviews(reviewsData.length);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingChange = (rating) => {
    setNewReview((prev) => ({
      ...prev,
      rating,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.text) {
      reviewsData.push(newReview);
      setNewReview({
        name: "",
        rating: 1,
        text: "",
        date: new Date().toLocaleDateString(),
      });
      setShowForm(false);
      setVisibleReviews(reviewsData.length); // Ensure the new review is displayed immediately
    } else {
      alert("Пожалуйста, заполните все поля!");
    }
  };

  return (
    <div>
      <div className="foot-header">
        <h2>Отзывы наших клиентов</h2>
        <p>
          Ваши отзывы помогают нам становиться лучше. Спасибо, что делитесь
          своими впечатлениями!
        </p>
      </div>
      <button
        className="leave-review-btn"
        id="leaveReviewBtn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Закрыть форму" : "Оставить отзыв"}
      </button>
      {showForm && (
        <form className="review-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="labelreviews" htmlFor="name">
              Ваше имя:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newReview.name}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Рейтинг:</label>
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={`star ${i < newReview.rating ? "selected" : ""}`}
                onClick={() => handleRatingChange(i + 1)}
              >
                {i < newReview.rating ? "★" : "☆"}
              </span>
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="text">Ваш отзыв:</label>
            <textarea
              id="text"
              name="text"
              value={newReview.text}
              onChange={handleFormChange}
              required
            />
          </div>
          <button type="submit">Отправить отзыв</button>
        </form>
      )}
      <section className="reviews">
        {reviewsData.slice(0, visibleReviews).map((review, index) => (
          <div className="review-item" key={index}>
            <h3>{review.name}</h3>
            <div className="review-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <span className="star" key={i}>
                  {i < review.rating ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p>{review.text}</p>
            <span className="review-date">{review.date}</span>
          </div>
        ))}
      </section>

      {/* Load More Button */}
      {visibleReviews < reviewsData.length && (
        <button className="load-more-btn" onClick={loadMoreReviews}>
          Показать ещё
        </button>
      )}
    </div>
  );
};

export default Reviews;
