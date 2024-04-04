import React from 'react'
import "../Footer/Footer.css"

import facebook from "../Asset/img/001-facebook.png"
import twitter from "../Asset/img/003-twitter.png"
import instagram from "../Asset/img/004-instagram.png"

import foodieland from "../Asset/img/Foodieland..png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
  <section  className="footer"  id="footer">


   <div className="footer__wrapper">

<div className="footer__logo">
  <img src={foodieland} alt="" />

  <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
</div>


    <div className="footer__box">
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/home'>About Us</Link></li>

      </ul>

    </div>


   </div>

   <hr />

<div  className="footer__bottom">
  <p>© 2020 Flowbase. Powered by <span> Webflow </span></p>
</div>


<ul className="footer__navigation">
    <li><img src={facebook} alt="" /></li>
    <li><img src={twitter} alt="" /></li>
    <li><img src={instagram} alt="" /></li>
  </ul>

  </section>
  )
}

export default Footer