import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import '../style.css'
import { submit, validate } from "helpers/form-validate";

import {FieldInput, FileField, TextAreaField} from "components";
import {setRate} from "helpers/set-rate";

let FormReview = (props) => {
    const { handleSubmit, reset } = props;
    const [rateField, setRateField] = useState(0)
    const [isSubmit, setIsSubmit] = useState(false)
    return (
        <form className="review-form" onSubmit={handleSubmit((values)=>submit(values, props.addPost, rateField, setIsSubmit, reset, setRateField))}>
          <div className="review-form__user">
            <div className="review-form__user-left">
              <Field
                type="text"
                name="name"
                label="Your name:"
                component={FieldInput}
                className="review-form__input"
              />
            </div>
            <div className="review-form__user-right">
              <Field
                type="text"
                name="email"
                label="Your mail:"
                component={FieldInput}
                className="review-form__input"
              />
            </div>
          </div>

            <div className="review-form__content">
                <Field
                  type="text"
                  name="comment"
                  label="Review:"
                  component={TextAreaField}
                  className="review-form__input"
                />
            </div>
            <div className="review-form__file-section">
              <Field
                  type="file"
                  name="photo"
                  label="Choose photo:"
                  accept=".jpg, .jpeg, .png"
                  component={FileField}
                  className="review-form__file"
              />
            </div>
            <div>
                <label className="review-form__label">Set movie rate:</label>
                {isSubmit && !rateField ? <div className="validation">Should be set movie rate!</div> : ""}
                {setRate({ starsNumber: rateField, onClickHandler: setRateField})}
            </div>

            <button className="review-form__submit" type="submit">Publish</button>
        </form>
    );
};

FormReview = reduxForm({
    form: "review",
    validate,
})(FormReview);

export { FormReview };
