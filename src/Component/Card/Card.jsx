import React from 'react'
import './Card.css'
const Card = ({cardimg,star,name,para,prise}) => {
  return (
    <div className='card'>
        <img src={cardimg} alt="" />
        <div className="card_text">
            <h3>{name}</h3>
            
            <p>{para}</p>
            <h2>Rs {prise}</h2>
           
            <img src={star} alt="imgS" className='rating'/>
        </div>
        
    </div>
  )
}

export default Card