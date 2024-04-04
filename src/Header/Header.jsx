import React, { useEffect, useRef, useState } from 'react'

import "../Header/Header.css"

import foodieland from "../Asset/img/Foodieland..png"

import facebook from "../Asset/img/001-facebook.png"
import twitter from "../Asset/img/003-twitter.png"
import instagram from "../Asset/img/004-instagram.png"

import { Link } from 'react-router-dom'


const nav__link=[

  {
    path:'/home',
    display: 'Home'
  },

  {
    path:'/receipes',
    display: 'Recipes'
  },

  {
    path:'/blog',
    display: 'Blog'
  },

  {
    path:'/contact',
    display: 'Contact'
  },

  {
    path:'/about',
    display: 'About Us'
  },
]


const Header = () => {

const [click, setclick] = useState(null)

const handleClick = () => {
  setclick(!click)
  
}

const headerRef = useRef(null)

useEffect( ()=> {

  const handleScroll= () => {
  
      if(document.documentElement.scrollTop > 80 || document.body.scrollTop  > 80) {

        headerRef.current.classList.add("header__shrink");
      }  else {
        headerRef.current.classList.remove("header__shrink");
      }
  };

  window.addEventListener('scroll', handleScroll);


  return() => {
    window.removeEventListener('scroll', handleScroll);
  };

},[])


  return (
   <section  className="header " id="header"  ref={headerRef}>

<div className="header__wrapper">


<div className="logo">
<img src={foodieland} alt="" />

 </div>


 <div  className="harmburger"  onClick={handleClick}>

 {
  click?  (<i class="ri-menu-2-line  show"></i>) :  (<i class="ri-close-line  close"></i>) 
 }
 </div>



<div className="menu">
  <ul  className={click?  ("navigate"): ("navigation") } >
    {
      nav__link.map(item => (
        <li className="navlink__item"><Link to={item.path}>{item.display}</Link></li>
      ))
    }
  </ul>
</div>

<div className="header__socials">
  <ul className="navigation__list">
    <li><img src={facebook} alt="" /></li>
    <li><img src={twitter} alt="" /></li>
    <li><img src={instagram} alt="" /></li>
  </ul>
</div>


</div>



   </section>
  )
}

export default Header