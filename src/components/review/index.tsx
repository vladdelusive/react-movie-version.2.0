import React from "react";
import "./style.css";
import icon from "assets/images/comment-icon.png";
import {IReview} from "./types";
import {setRate} from "../../helpers/set-rate";

export const Review = React.memo<IReview>(({ content, author, photoField, rateField }) =>{
    return (
        <div className="review">
            <div className="review__side-left">
                <img
                    src={photoField ? window.URL.createObjectURL(photoField) : icon}
                    alt="review_icon"
                    className={`review__side-icon`}
                    style={photoField ? { borderRadius: "15px"} : {}}
                />
            </div>
            <div className="review__side-right">
                <div className="review-author">
                    <p className="review-author__text">Author: {author}</p>
                    {rateField && <div className="review-author__rate">{setRate({starsNumber: rateField})}</div>}
                </div>
                <div className="review-comment">
                    <p className={`review-comment__text`}>
                        {rateField}
                        {content.replace(/(http)..+/g, "")}
                    </p>
                </div>
            </div>
        </div>
    );
})
