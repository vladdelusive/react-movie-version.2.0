import React from "react";
import mainImage from "assets/images/githubImage.png";
import "./style.css";

export const DeveloperLink = React.memo(() => {
    return (
        <div className="developer-link">
          <a className="footer__image" href="https://github.com/vladdelusive">
            <img src={mainImage} alt={"github_image"} />
          </a>
        </div>
    );
})
