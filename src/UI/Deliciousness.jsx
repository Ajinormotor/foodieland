import React from 'react'

import "../Styles/Deliciousness.css"

import deli1 from "../Asset/img/kisspng-salad-salad-fresh-food-healthylife-vegetables-vegetarian-5d42e3a7cb8543 1.png"
import deli2  from  "../Asset/img/Photo.png"
const Deliciousness = () => {
  return (
   <section  className="deliciousness"   id="deliciousness">

    <div className="deliciousness__wrapper">

        <div className="deliciousness__pics1">
            <img src={deli1} alt="" />
        </div>

        <div className="deliciousness__text">
            <h1>Deliciousness to your inbox</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>


<div  className="deliciousness__form">
<input type="text" placeholder="Your Email Address" />
<button  className="deliciousness__btn">Subscribe</button>
</div>


                
        </div>



        <div className="deliciousness__pics2">
            <img src={deli2} alt="" />
        </div>

    </div>

   </section>
  )
}

export default Deliciousness