import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import '../style.css'

import {FieldInput, FileField, TextAreaField} from "components";
import {validateEmail} from "helpers/email-checker";
import {rightFileSize, validFileType} from "helpers/file-checker";
import {setRate} from "helpers/set-rate";

const warnChecker = (values) => {
    const warnings = {}
    console.log(values)
    if (values?.comment && values?.comment.length < 5){
        warnings.comment = "Should be typed more than 5 letters!"
    }
    if (values?.name && values?.name.length < 3){
        warnings.name = "Should be more than 3 letters!"
    }
    if (values?.email && !validateEmail(values.email)) {
        warnings.email = "Should be correct email!"
    }
    if (values?.photo && !checkFile(values.photo)) {
        warnings.photo = "Should be img file and not more than 1MB!"
    }
    return warnings
}

const checkFile = ({size, type}) => {
    if(validFileType(type) && rightFileSize(size)) {
        return true
    }
    return false
}

let FormReview = (props) => {

    const handleSubmit2 = (values) => {
        console.log(values)
        if(!values?.comment || !values?.name || !values?.email || !values?.photo) return
        props.addPost(values, rateField)
    }
    const { handleSubmit, submitting } = props;
    const [rateField, setRateField] = useState(0)

    return (
        <form className="review-form" onSubmit={handleSubmit(handleSubmit2)}>
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
                {rateField>100 ? (
                  <div className="validation">Should be set movie rate!</div>
                ) : ""}
                {setRate({ starsNumber: rateField, onClickHandler: setRateField})}
            </div>

            <button className="review-form__submit" type="submit" disabled={submitting}>Publish</button>
        </form>
    );
};

FormReview = reduxForm({
  // a unique name for the form
  form: "review",
  validate: warnChecker
})(FormReview);

export { FormReview };
