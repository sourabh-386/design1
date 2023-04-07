import React from 'react'
import './Header.css'
import location from '../../Images/header/location.png'
import Vector from '../../Images/header/Vector.png'

const Header = () => {

    const array =['Fresh',`Today’s Deals`,`Mobiles`,`Tv`,`Laptop`,`Clothing`,`Jewelry`,`Health`,`Food Items`,`Grocery`,`Beauty`,`Stationary`,`Fitness`,`Sport`,`Bags`]
    return (
        <div className='header'>
            <div className="search_btn">
                <button><img src={location} alt="img" />Sultanpur</button>
                <div className='search'>
                    <input type="text" placeholder='Search anything...' />
                    <img src={Vector} alt="img" />
                    </div>
            </div>
            <div className="name">
                {
                    array.map(value=>{
                        return(
                            <p>{value}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header