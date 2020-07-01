import React, {useState, useEffect, FormEvent} from "react";
import "./style.css";
import { Review } from "components";
import {IReviewsMovies} from "react-app-env";
import {IPropsReviews} from "./types";
import {rightFileSize, validFileType} from "helpers/file-checker";
import {validateEmail} from "helpers/email-checker";
import {setRate} from "helpers/set-rate";
import { FormReview } from "./form";

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

  const submit = (values: any) => {
    values.defaultPrevented = true

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
          
            <FormReview/>
            
          </>
        }
      </div>
    </div>
  );
});
