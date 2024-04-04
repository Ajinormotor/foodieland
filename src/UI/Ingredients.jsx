import React from 'react'

import "../Styles/Ingredient.css"

import elipse1 from "../Asset/img/Ellipse 7.png"
import elipse2 from "../Asset/img/Group 885.png"

import ads from "../Asset/img/Ads.png"
import woman from "../Asset/img/Rectangle 23.png"

import cheeseball from "../Asset/img/Mask Group (3).png"
import plate1 from "../Asset/img/image 26 (4).png"
import plate2 from "../Asset/img/Mask Group (4).png"

const Ingredients = () => {
  return (
   <section  className="ingredients"  id="ingredients">

    {/*======FIRST WRAPPER CONTENT=====*/}

    <div className="ingredients__wrapper">

        <div className="ingredients__text">
  <h1>Ingredients</h1>

  <h2>for main dish</h2>

  <ul  className="ingredients__menu">
    <li  className="ingredients__item">
      <img src={elipse2} alt="" /> 
    <p  className="underline">Lorem ipsum dolor sit amet</p>
    </li>

    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>
    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>

    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>
    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>

  </ul>
        </div>

        <div className="ingredients__box">
  <h1>Other Recipe</h1>

  <div className="ingredientsbox__wrapper">

    <div  className="ingredient__content">

    <div className="ingredients__content__pics">
      <img src={cheeseball} alt="" />
    </div>

    <div className="ingredients__content__text" >
      <h1>Chicken Meatball with Creamy Chees...</h1>
      <p>  By Andreas Paula</p>
    </div>
    </div>

    
    <div  className="ingredient__content">
    <div className="ingredients__content__pics">
      <img src={plate1} alt="" />
    </div>

    <div className="ingredients__content__text">
      <h1>The Creamiest Creamy Chicken an....</h1>
      <p>  By Andreas Paula</p>
    </div>
    </div>

    <div  className="ingredient__content">
    <div className="ingredients__content__pics">
      <img src={plate2} alt="" />
    </div>

    <div className="ingredients__content__text">
      <h1>The Best Easy One Pot Chicken and Rice</h1>
      <p>  By Andreas Paula</p>
    </div>
    </div>

 

  </div>
        </div>

    </div>

      {/*======SECOND WRAPPER CONTENT=====*/}

      <div  className="ingredients__wrapper2">

      <div className="ingredients__text2">
  <h1>for the sauce</h1>

  

  <ul  className="ingredients__menu">
    

    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>
    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>

    <li  className="ingredients__item">
      <img src={elipse1} alt="" /> 
    <p>Lorem ipsum dolor sit amet</p>
    </li>

   

  </ul>
        </div>

        <div className="ingredients__box2">
    

    <div className="ingredients__content__pics2">
      <img src={ads} alt="" />
    </div>

    </div>
     

      </div>


      {/*======DIRECTION CONTENT=====*/}
      

      <div className="direction__wrapper">

        <div className="direction__heading">
          <h1>Directions</h1>

          <ul  className="direction__menu">
    <li  className="direction__item">
      <img src={elipse1} alt="" /> 
    <p>1. Lorem ipsum dolor sit amet</p>
    </li>

    </ul>

    <p>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>

    <img src={woman} alt="" />


<p>  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
  consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>

        <div className="direction__heading">
        

          <ul  className="direction__menu">
    <li  className="direction__item">
      <img src={elipse1} alt="" /> 
    <p>1. Lorem ipsum dolor sit amet</p>
    </li>

    </ul>

    <p>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>


        </div>

        <div className="direction__heading">
         

          <ul  className="direction__menu">
    <li  className="direction__item">
      <img src={elipse1} alt="" /> 
    <p>1. Lorem ipsum dolor sit amet</p>
    </li>

    </ul>

    <p>
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
     eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
    </p>
        </div>


      </div>



   </section>
  )
}

export default Ingredients