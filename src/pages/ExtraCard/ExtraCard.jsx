import React from 'react'
import './ExtraCard.css'
import { Link } from 'react-router-dom'

    <ExtraCard logo="logo" title="title" text="text" url="url"/>

export default function ExtraCard({logo, title, text, url}) {
    return (
        <div className='ExtraCardDesign'>
            <div className='ExtraCardLogo'>
                {logo}
            </div>
        <div className='ExtraCardTitle'>
            <p>
                {title}
            </p>
        </div>
        <div className='ExtraCardText'>
            <p>
                {text}
            </p>
        </div>
        <div className='ExtraCardUrl'>
            <a href={url}>MORE ABOUT</a>
        </div>
        </div>
    )
}