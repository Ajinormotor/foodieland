import React from 'react'

import "../Styles/Everyone.css"

import everyone from "../Asset/img/Group 880.png"

const Everyone = () => {
  return (
  <section  className="everyone"  id="everyone">


    <div className="everyone__wrapper">
        <div className="everyone__text">
   <h1>Everyone can be a
chef in their own kitchen</h1>
<p>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
    <button  className="everyone__btn">Learn More</button>
        </div>

        <div className="everyone__pics">
            <img src={everyone} alt="" />
        </div>
    </div>

  </section>
  )
}

export default Everyone