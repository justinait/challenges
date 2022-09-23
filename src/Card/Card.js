import React from 'react'
import './Card.css'

function Card() {
  return (
    <div className='container'>
        <div className="qrBox">
            <img src="/images/image-qr-code.png" alt="QR" />
        </div>
        <div className="cardText">
            <h2>Improve your Front-End skills by building proyects</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa incidunt doloribus molestiae officiis</p>
        </div>
    </div>
  )
}

export default Card