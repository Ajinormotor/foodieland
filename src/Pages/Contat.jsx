import React from 'react'

import "../Styles/Contact.css"

import Deliciousness from '../UI/Deliciousness'
import Otherrecipe from '../UI/Otherrecipe'

import chef from "../Asset/img/Layer 1 1.png"

const Contat = () => {
  return (
   <section  className="contact"  id="contact">



  <div className="contact__heading">
    <h1>Contact Us</h1>
  </div>

  <div className="contact__wrapper">

    <div className="contact__pics">
<img src={chef} alt="" />
    </div>

    <div className="contact__form">

      <form action=""  >

        <div className="form__wrapper">

        <div  className="form__content">
      <label htmlFor="text">Name </label>
      <input type="text"   placeholder="Enter your name"/>
    </div>

    <div className="form__content">
      <label htmlFor="text">Email Address </label>
      <input type="text"   placeholder="Your email address....."/>
    </div>

        </div>


        <div className="form__wrapper">

        <div  className="form__content">
      <label htmlFor="text">Subject </label>
      <input type="text"   placeholder="Enter subject"/>
    </div>

    <div className="form__content">
      <label htmlFor="text">ENQUIRY TYPE</label>

      <select name="" id="select">

        <option value="text">Advertising</option>
        <option value="text">Billboard</option>
      </select>
      
    </div>

        </div>
   


        <div className="form__message">

<div  className="form__content">
<label htmlFor="text">Messages</label>
<input type="text"   placeholder="Enter your Message"/>
</div>



</div>

<div className="form__button">
  <button> Submit</button>
</div>



      </form>

    </div>

  </div>





 <Deliciousness  />
 <Otherrecipe  />

   </section>
  )
}

export default Contat