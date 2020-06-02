import React from 'react'
import mainImage from './githubImage.png'
import './Footer.css'

export const Footer = () => {
    return<a className="footer" href="https://github.com/vladdelusive">
            <img className="footer__image" src={mainImage} alt={"github_image"}/>
        </a>
}