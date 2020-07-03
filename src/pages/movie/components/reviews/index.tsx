import React, {useState} from "react";
import { Review } from "components";
import {IReviewsMovies} from "react-app-env";
import {IAddPost, IPropsReviews} from "./types";
import { FormReviewComponent } from "./form";

export const Reviews = React.memo<IPropsReviews>(({ movieInfo, addReview, movieId }) => {
  const { reviews, results: { title } } = movieInfo
  const [postIsAdd, setPostIsAdd] = useState(false)

  const addPost: IAddPost = (values, rate) => {
    const id = new Date().valueOf() + values.name;
    const review = {content: values.comment, author: values.name, id, photoField: values.photo, rateField: rate}
    addReview({movieId, review})
  }

  const textTitle = reviews.length
    ? `Write your review to "${title}" movie!`
    : `Write first review to "${title}" movie!`

  const comments = reviews.map(({ author, id, content, rateField, photoField }: IReviewsMovies ): JSX.Element => {
    return <Review key={id} content={content} author={author} rateField={rateField} photoField={photoField} />;
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
      { postIsAdd ? "" :
        <>
          <div className="review-tip">
            <p className="review-tip__text">{textTitle}</p>
          </div>
            <FormReviewComponent addPost={addPost} setPostIsAdd={setPostIsAdd}/>
          </>
        }
      </div>
    </div>
  );
});
