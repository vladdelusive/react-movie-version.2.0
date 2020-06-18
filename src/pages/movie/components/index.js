import React from "react";
import "./style.css";
import { Review } from "components";

export const Reviews = React.memo(({ reviews }) => {
  const comments = reviews.map(({ author, id, content }) => {
    return <Review key={id} content={content} author={author} />;
  });
  return (
    <div className="reviews">
      <div className="section__title">
        <h1 className="review__title">Reviews:</h1>
      </div>
      <div className="reviews__container">{comments}</div>
    </div>
  );
});
