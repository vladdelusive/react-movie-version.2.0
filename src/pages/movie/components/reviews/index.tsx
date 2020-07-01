import React, {useState, useEffect, FormEvent} from "react";
import "./style.css";
import { Review } from "components";
import {IReviewsMovies} from "react-app-env";
import {IPropsReviews} from "./types";
import {rightFileSize, validFileType} from "helpers/file-checker";
import {validateEmail} from "helpers/email-checker";
import {setRate} from "helpers/set-rate";

export const Reviews = React.memo<IPropsReviews>(({ movieInfo, addReview, movieId }) => {
  const { reviews, results: { title } } = movieInfo
  const [postIsAdd, setPostIsAdd] = useState(false)
  const [reviewField, setReviewField] = useState("")
  const [nameField, setNameField] = useState("")
  const [emailField, setEmailField] = useState("")
  const [photoField, setPhotoField] = useState(null)
  const [rateField, setRateField] = useState(0)

  const [validation, setValidation] = useState({name: false, comment: false, file: false, email: false, stars: false})
  const addPost = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    if(reviewField.trim().length < 5 || nameField.trim().length < 3 || !validateEmail(emailField) || !photoField || !rateField) {
      reviewField.length < 5 && setValidation((prev)=>({...prev, comment: true}))
      nameField.length < 3 && setValidation((prev)=>({...prev, name: true}))
      !validateEmail(emailField) && setValidation((prev)=>({...prev, email: true}))
      !photoField && setValidation((prev)=>({...prev, file: true}))
      !rateField && setValidation((prev)=>({...prev, stars: true}))
      return
    }

    const id = new Date().valueOf() + nameField;
    const review = {content: reviewField, author: nameField, id, photoField, rateField}
    addReview({movieId, review})
    setReviewField("")
    setNameField("")
    setPostIsAdd(true)
  }

  useEffect(() => {
    setReviewField("")
    setNameField("")
  }, [movieId])

  const textTitle = reviews.length 
    ? `Write your review to "${title}" movie!`
    : `Write first review to "${title}" movie!` 
  const comments = reviews.map(({ author, id, content, rateField, photoField }: IReviewsMovies ): JSX.Element => {
    return <Review key={id} content={content} author={author} rateField={rateField} photoField={photoField} />;
  });

  const checkFile = (e: any) => {
    const {size, type} = e.target.files[0] || {};
    setPhotoField(e.target.files[0])
    if(validFileType(type) && rightFileSize(size)) {
      setValidation((prev)=>({...prev, file: false}))
      return
    }
    setValidation((prev)=>({...prev, file: true}))
    return
  }

  const clickStarHandler = (num: number) => {
    setRateField(num)
    !rateField && setValidation((prev)=>({...prev, stars: false}))
  }

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
              <div className="review-form__user">
                <div className="review-form__user-left">
                  <label className="review-form__label" htmlFor="name">Your name:</label>
                  {validation.name && <div className="validation">Should be more than 3 letters!</div>}
                  <input
                      onFocus={()=>setValidation({...validation, name: false})}
                      value={nameField}
                      onChange={({target})=>{
                        setValidation({...validation, name: false})
                        setNameField(target.value)
                      }}
                      className="review-form__input"
                      type="text"
                      name="name"
                      id="name"
                  />
                </div>
                <div className="review-form__user-right">
                  <label className="review-form__label" htmlFor="mail">Your mail:</label>
                  {validation.email && <div className="validation">Should be correct email!</div>}
                  <input
                      onFocus={()=>setValidation({...validation, email: false})}
                      onChange={({target}) => {
                        setValidation({...validation, email: false})
                        setEmailField(target.value)
                      }}
                      id="mail" className="review-form__input"
                  />
                </div>
              </div>

              <div className="review-form__content">
                <label className="review-form__label" htmlFor="comment">Review:</label>
                {validation.comment && <div className="validation">Should be typed more than 5 letters!</div>}
                <textarea
                  onFocus={()=>setValidation({...validation, comment: false})}
                  value={reviewField}
                  onChange={e=>{
                    setValidation({...validation, comment: false})
                    setReviewField(e.target.value)
                  }}
                  className="review-form__textarea"
                  name="comment"
                  id="comment">
                </textarea>
              </div>
              <div className="review-form__file-section">
                <label className="review-form__label">Choose photo:</label>
                {validation.file && <div className="validation">Should be img file and not more than 1MB!</div>}
                <input onChange={checkFile} type="file" className="review-form__file" accept=".jpg, .jpeg, .png"/>
              </div>
              <div>
                <label className="review-form__label">Set movie rate:</label>
                {validation.stars && <div className="validation">Should be set movie rate!</div>}
                {setRate({starsNumber: rateField, onClickHandler: clickStarHandler})}
              </div>

              <button className="review-form__submit" type="submit">Publish</button>
            </form>
          </>
        }
      </div>
    </div>
  );
});
