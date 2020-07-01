import React from "react";
import { Field, reduxForm } from "redux-form";
import '../style.css'

import { FieldInput } from "components";

let FormReview = (props) => {
  const { handleSubmit } = props;
  return (
    <form className="review-form" onSubmit={(e) => e.preventDefault()}>
      <div className="review-form__user">
        <div className="review-form__user-left">
          <Field
            type="text"
            name="review-name"
            label="Your name:"
            component={FieldInput}
            className="review-form__input"
          />

          {/* <label className="review-form__label" htmlFor="name">
            Your name:
          </label>
          {validation.name && (
            <div className="validation">Should be more than 3 letters!</div>
          )}
          <input
            onFocus={() => setValidation({ ...validation, name: false })}
            value={nameField}
            onChange={({ target }) => {
              setValidation({ ...validation, name: false });
              setNameField(target.value);
            }}
            className="review-form__input"
            type="text"
            name="name"
            id="name"
          /> */}
        </div>
        <div className="review-form__user-right">
          <Field
            type="text"
            name="review-mail"
            label="Your mail:"
            component={FieldInput}
            className="review-form__input"
          />
          {/* <label className="review-form__label" htmlFor="mail">
            Your mail:
          </label>
          {validation.email && (
            <div className="validation">Should be correct email!</div>
          )}
          <input
            onFocus={() => setValidation({ ...validation, email: false })}
            onChange={({ target }) => {
              setValidation({ ...validation, email: false });
              setEmailField(target.value);
            }}
            id="mail"
            className="review-form__input"
          /> */}
        </div>
      </div>

      <div className="review-form__content">
        <Field
          type="text"
          name="review-comment"
          label="Review:"
          component={FieldInput}
          className="review-form__input"
          fieldType="textarea"
        />
        {/* <label className="review-form__label" htmlFor="comment">
          Review:
        </label>
        {validation.comment && (
          <div className="validation">Should be typed more than 5 letters!</div>
        )}
        <textarea
          onFocus={() => setValidation({ ...validation, comment: false })}
          value={reviewField}
          onChange={(e) => {
            setValidation({ ...validation, comment: false });
            setReviewField(e.target.value);
          }}
          className="review-form__textarea"
          name="comment"
          id="comment"
        ></textarea> */}
      </div>
      {/*<div className="review-form__file-section">
        <label className="review-form__label">Choose photo:</label>
        {validation.file && (
          <div className="validation">
            Should be img file and not more than 1MB!
          </div>
        )}
        <input
          onChange={checkFile}
          type="file"
          className="review-form__file"
          accept=".jpg, .jpeg, .png"
        />
      </div> */}
      {/* <div>
        <label className="review-form__label">Set movie rate:</label>
        {validation.stars && (
          <div className="validation">Should be set movie rate!</div>
        )}
        {setRate({ starsNumber: rateField, onClickHandler: clickStarHandler })}
      </div> */}

      {/* <button className="review-form__submit" type="submit">
        Publish
      </button> */}
    </form>
  );
};

FormReview = reduxForm({
  // a unique name for the form
  form: "review",
})(FormReview);

export { FormReview };
