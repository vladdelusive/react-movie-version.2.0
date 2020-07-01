import React from "react";
import "./style.css";
import icon from "assets/images/comment-icon.png";
import {IReview} from "./types";

export const Review = React.memo<IReview>(({ content, author }) =>{
    return (
        <div className="review">
            <div className="review__side-left">
                <img
                    src={icon}
                    alt="review_icon"
                    className={`review__side-icon`}
                />
            </div>
            <div className="review__side-right">
                <div className="review-author">
                <p className="review-author__text">Author: {author}</p>
                </div>
                <div className="review-comment">
                <p className={`review-comment__text`}>{content.replace(/(http)..+/g, "")}</p>
                </div>
            </div>
        </div>
    );
})
