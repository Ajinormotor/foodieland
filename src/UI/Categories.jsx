import React from 'react'


import "../Styles/Categories.css"


import breakfast from "../Asset/img/image 25.png"
import vegan from "../Asset/img/Group 879.png"
import meat from "../Asset/img/image 21.png"
import dessert from "../Asset/img/image 22.png"
import Chocolate from "../Asset/img/image 24.png"
import lunch  from "../Asset/img/image 23.png"


const Categories = () => {
  return (
  <section  className="categories" id="categories">


    <div className="categories__heading">
        <h1>Categories</h1>

        <div  className="views"><p>View All Categories</p></div>
    </div>

    <div className="categories__wrapper">

        <div className="categories__box1">   <img src={breakfast} alt=""  className="categories__pics" /> <h1>BreakFast</h1></div>
        <div className="categories__box2">   <img src={vegan} alt=""  className="categories__pics" /> <h1>Vegan</h1></div>
        <div className="categories__box3">   <img src={meat} alt="" className="categories__pics"/> <h1>Meat</h1></div>
        <div className="categories__box4">   <img src={dessert} alt="" className="categories__pics" /> <h1>Dessert</h1></div>
        <div className="categories__box5">   <img src={lunch} alt=""  className="categories__pics"/> <h1>Lunch</h1></div>
        <div className="categories__box6">   <img src={Chocolate} alt="" className="categories__pics"/> <h1>Chocolate</h1></div>


   


    </div>

  </section>
  )
}

export default Categories