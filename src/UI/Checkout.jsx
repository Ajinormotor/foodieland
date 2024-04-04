import React from 'react'

import  "../Styles/Checkout.css"

import post1 from "../Asset/img/Post (1).png"

const Checkout = () => {
  return (
  <section  className="checkout" id="checkout">
    <div className="checkout__heading">
        <h1>Check out @foodieland on Instagram</h1>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    </div>
    <div className="checkout__wrapper">

        <div className="checkout__box">
            <img src={post1} alt="" />
        </div>

        <div className="checkout__box">
            <img src={post1} alt="" />
        </div>


        <div className="checkout__box">
            <img src={post1} alt="" />
        </div>


        <div className="checkout__box">
            <img src={post1} alt="" />
        </div>


    </div>
    </section>
  )
}

export default Checkout