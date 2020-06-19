import React, { useState} from "react";
import "./style.css";
import { Review } from "components";

export const Reviews = React.memo(({ movieInfo, addReview, movieId }) => {
  const { reviews, results: { title } } = movieInfo
  const [reviewForm, setReviewForm] = useState("")
  const [nameForm, setNameForm] = useState("")

  const addPost = (e) => {
    e.preventDefault()
    const id = new Date().valueOf() + nameForm;
    const review = {content: reviewForm, author: nameForm, id }
    addReview({movieId, review})
    setReviewForm("")
    setNameForm("")
  }

  const textTitle = reviews.length 
    ? `Write your review to "${title}" movie!`
    : `Write first review to "${title}" movie!` 
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
        <form className="review-form" onSubmit={addPost}>
          <label className="review-form__label" htmlFor="name">Your name:</label>
          <input value={nameForm} onChange={({target})=>setNameForm(target.value)} className="review-form__input" type="text" name="name" id="name" />

          <label className="review-form__label" htmlFor="comment">Review:</label>
          <textarea 
            value={reviewForm} 
            onChange={e=>setReviewForm(e.target.value)} 
            className="review-form__textarea" 
            name="comment" 
            id="comment">
          </textarea>

          <button className="review-form__submit" type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
});
