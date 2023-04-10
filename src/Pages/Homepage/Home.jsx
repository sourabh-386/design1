import React from 'react'
import './Home.css'
import { Navbar, Header, Item1, Card } from '../../Component'


import rectangle1 from '../../Images/Rectangle 2.png'
import rectangle2 from '../../Images/Rectangle 6.png'


import list2img1 from '../../Images/sdsd/itemlist2/Frame 10.png'
import list2img2 from '../../Images/sdsd/itemlist2/Frame 11.png'
import list2img3 from '../../Images/sdsd/itemlist2/Frame 12.png'
import list2img4 from '../../Images/sdsd/itemlist2/Frame 13.png'
import list2img5 from '../../Images/sdsd/itemlist2/Frame 14.png'


import list3img1 from '../../Images/sdsd/itemlist3/Component 2.png'
import list3img2 from '../../Images/sdsd/itemlist3/Component 3.png'
import list3img3 from '../../Images/sdsd/itemlist3/Component 4.png'
import list3img4 from '../../Images/sdsd/itemlist3/Component 5.png'
import list3img5 from '../../Images/sdsd/itemlist3/Component 6.png'


import list4img1 from '../../Images/sdsd/itemlist4/Frame 10.png'
import list4img2 from '../../Images/sdsd/itemlist4/Frame 11.png'
import list4img3 from '../../Images/sdsd/itemlist4/Frame 12.png'
import list4img4 from '../../Images/sdsd/itemlist4/Frame 13.png'
import list4img5 from '../../Images/sdsd/itemlist4/Frame 14.png'



// card images
import card1img from '../../Images/card_images/Rectangle 4.png'
import card2img from '../../Images/card_images/rectangle5.png'
import star from '../../Images/card_images/Component 3.png'





const Home = () => {

  const arrlist2 = [list2img1, list2img2, list2img3, list2img4, list2img5]

  const arrlist3 = [list3img1, list3img2, list3img3, list3img4, list3img5]

  const arrlist4 = [list4img1, list4img2, list4img3, list4img4, list4img5]



  return (
    <div className='home'>
      <Navbar />
      <hr />
      <Header />
      <br />
      {/* <br /> */}
      <center><h2>hot deals for you</h2></center>
      <Item1 />
      <img src={rectangle1}  className='big_img' alt="img"  />
      <br />
      <br />
      <br />
      <h2>Today’s hot deals</h2>
      <div className='itemlist'>
        {
          arrlist2.map(value => {
            return (
              <img src={value} alt="img" />
            )
          })
        }
      </div>
      <br />
      <br />
      <h2>Newly launched shops</h2>

      <div className='itemlist'>

        {
          arrlist3.map(value => {
            return (
              <img src={value} alt="img" />
            )
          })
        }
      </div>
      <br />
      <br />
      <br />
      <br />

      <img src={rectangle2} className='big_img' alt="img"  />
      <br />
      <br />
      <br />
      <h2>Deals of Eloctronics</h2>
    
      <div className='itemlist'>
      
        {
          arrlist4.map(value => {
            return (
              <img src={value} alt="img" />
            )
          })
        }
      </div>
      <br />
      <br />
      <h2>Review your purchase</h2>
    
      <div className='card_caint'>
        <Card cardimg={card1img} star={star} name='Gold Bangle BG152, 18kt.
18.6(gms)' para='you bought it at the best price' prise='138,044.00' />

        <Card cardimg={card2img} star={star} name='Multicolor Georgette Saree for Women with Blouse Piece (DILBARO 5399)' para='you bought it at the best price' prise='1,563.00'/>

      </div>
      <br />
    </div>
  )
}

export default Home