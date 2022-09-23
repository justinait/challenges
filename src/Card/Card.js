import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='container'>
        <div className="qrBox">
            <img src="/images/image-qr-code.png" alt="QR" />
        </div>
        <div className="cardText">
            <h3>Improve your front-end skills by building proyects</h3>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  )
}

export default Card