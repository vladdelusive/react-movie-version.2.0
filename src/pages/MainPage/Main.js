import React from 'react'
import Image from '../../components/Main/mainImage.png'
import '../../components/Main/Main.css'

export default function Main() {
    return <div className="main-page">
        <img src={Image} className="main-page__image" alt="main_img"/>
    </div>
}
