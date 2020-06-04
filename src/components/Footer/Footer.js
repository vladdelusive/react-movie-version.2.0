import React from 'react'
import mainImage from './githubImage.png'
import './Footer.css'

export const Footer = () => {
    return <div className="footer">
        <a className="footer__image" href="https://github.com/vladdelusive">
            <img src={mainImage} alt={"github_image"}/>
        </a>
    </div>
}