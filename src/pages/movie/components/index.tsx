import React, {useState, useEffect, FormEvent} from "react";
import "./style.css";
import { Review } from "components";
import {IMovieInfo} from "store/movies/types";
import {IReviewsMovies} from "react-app-env";

interface Props {
  movieInfo: IMovieInfo,
  addReview: ({movieId, review}:{movieId: number, review: IReviewsMovies}) => void,
  movieId: number
}

export const Reviews = React.memo(({ movieInfo, addReview, movieId }: Props) => {
  const { reviews, results: { title } } = movieInfo
  const [postIsAdd, setPostIsAdd] = useState(false)
  const [reviewForm, setReviewForm] = useState("")
  const [nameForm, setNameForm] = useState("")

  const [validation, setValidation] = useState({name: false, comment: false})
  const addPost = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if(reviewForm.trim().length < 5 || nameForm.trim().length < 3) {
      reviewForm.length < 5 && setValidation((prev)=>({...prev, comment: true}))
      nameForm.length < 3 && setValidation((prev)=>({...prev, name: true}))
      return
    }

    const id = new Date().valueOf() + nameForm;
    const review = {content: reviewForm, author: nameForm, id }
    addReview({movieId, review})
    setReviewForm("")
    setNameForm("")
    setPostIsAdd(true)
  }

  useEffect(() => {
    setReviewForm("")
    setNameForm("")
  }, [movieId])

  const textTitle = reviews.length 
    ? `Write your review to "${title}" movie!`
    : `Write first review to "${title}" movie!` 
  const comments = reviews.map(({ author, id, content }: IReviewsMovies ): JSX.Element => {
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
      { postIsAdd ? "" :
        <>
          <div className="review-tip">
            <p className="review-tip__text">{textTitle}</p>
          </div>
            <form className="review-form" onSubmit={addPost}>
              <label className="review-form__label" htmlFor="name">Your name:</label>
              {validation.name && <span className="validation">Should be type more than 3 letters!</span>}
              <input 
                onFocus={()=>setValidation({...validation, name: false})}
                value={nameForm} 
                onChange={({target})=>{
                    setValidation({...validation, name: false})
                    setNameForm(target.value)
                  }} 
                className="review-form__input" 
                type="text" 
                name="name" 
                id="name" 
              />

              <label className="review-form__label" htmlFor="comment">Review:</label>
              {validation.comment && <span className="validation">Should be type more than 5 letters!</span>}
              <textarea 
                onFocus={()=>setValidation({...validation, comment: false})}
                value={reviewForm} 
                onChange={e=>{
                  setValidation({...validation, comment: false})
                  setReviewForm(e.target.value)
                }} 
                className="review-form__textarea" 
                name="comment" 
                id="comment">
              </textarea>
              <button className="review-form__submit" type="submit">Publish</button>
            </form>
          </>
        }
      </div>
    </div>
  );
});
