import React from 'react'
import './Item1.css'

import img1 from '../../Images/sdsd/itemlist1/Frame 10.png'
import img2 from '../../Images/sdsd/itemlist1/Frame 11.png'
import img3 from '../../Images/sdsd/itemlist1/Frame 12.png'
import img4 from '../../Images/sdsd/itemlist1/Frame 13.png'
import img5 from '../../Images/sdsd/itemlist1/Frame 14.png'
import img6 from '../../Images/sdsd/itemlist1/Frame 15.png'


let arr = [img1, img2, img3, img4, img5, img6]


const Item1 = () => {
    return (
        <div className='item1'>
            <div className='item_name'>
                <p>We picked some <b style={{
                    color: `
rgba(255, 153, 51, 1)`}}> cool things </b>for you!<b>*</b></p>
            </div>
            <div className='items'>
                {
                    arr.map(value => {
                        return (
                            <img src={value} alt="img" />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Item1