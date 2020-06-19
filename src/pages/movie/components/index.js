import React from "react";
import "./style.css";
import { Review } from "components";

export const Reviews = React.memo(({ reviews, movieName }) => {
  const textTitle = reviews.length 
    ? `Write your review to "${movieName}" movie!`
    : `Write first review to "${movieName}" movie!` 
  const comments = reviews.map(({ author, id, content }) => {
    return <Review key={id} content={content} author={author} />;
  });
  return (
    <div className="reviews">
      {
        reviews.length ?
        <> 
          <div className="section__title">
          <h1 className="review__title">Reviews:</h1>
          </div>
          <div className="reviews__container">{comments}</div>
        </> : ""
      }

      <div className="review-field">
        <div className="review-tip">
          <p className="review-tip__text">{textTitle}</p>
        </div>
        <form className="review-form" onSubmit={e=>e.preventDefault()}>
          <label className="review-form__label" for="name">Your name:</label>
          <input className="review-form__input" type="text" name="name" id="name" />

          <label className="review-form__label" for="comment">Review:</label>
          <textarea className="review-form__textarea" name="comment" id="comment"></textarea>

          <button className="review-form__submit" type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
});
