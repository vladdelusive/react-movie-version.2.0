import React from 'react'
import Image from './mainImage.png'
import './Main.css'

export default function Main() {
    return <div className="main-page">
        <img src={Image} className="main-page__image" alt="main_img"/>
    </div>
}
