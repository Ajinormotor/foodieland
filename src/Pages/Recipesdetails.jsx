import React from 'react'

import john from "../Asset/img/Ellipse 2.png"
import spoon from "../Asset/img/ForkKnife - Copy.png"
import clock from "../Asset/img/Vector.png"

import share from "../Asset/img/share.png"
import  printer from "../Asset/img/printer.png"

import "../Styles/Recipedetails.css"
import { useParams } from 'react-router-dom'
import recipedata1 from '../Asset/Data/recipedata1'
import Ingredients from '../UI/Ingredients'
import Deliciousness from '../UI/Deliciousness'
import Otherrecipe from '../UI/Otherrecipe'

const Recipesdetails = () => {


    const {id}  = useParams();

    const item = recipedata1.find(item=> item.id===id);

    const {text1,img} = item;

if(!item){
    return("ID not found")
}
    
  return (

  <section  className="receipesdetails" id="recipesdetails">

    {/*=======HEADING CONTENT======*/}
  <div className="recipesdetails__heading">

    <div className="recipedetailsheading__wrapper">

    <h1>{text1}</h1>

    <div  className="recipedetailsbottom__wrapper" >

    <div  className="recipesdetails__content">
    <img src={john} alt="" />
    <p>John Smith   <span>15 M_arch 2022</span> </p> 
 
</div>

<div  className="recipesdetails__content">
    <img src={clock} alt="" />
    <p>PREP TIME <span>15 15 Minutes</span> </p> 
 
</div>

<div  className="recipesdetails__content">
    <img src={clock} alt="" />
    <p>COOK TIME<span>15 15 Mintues</span> </p> 
 
</div>

<div  className="recipesdetails__content">
    <img src={spoon} alt="" />
    <p>CHICKEN</p> 
 
</div>



    </div>
  </div>

 
     {/*=======SECOND HEADING BOX======*/}

  <div  className="recipedetailsheading__wrapper2">

  <div  className="recipesdetails__content2">
<img src={printer} alt="" />
<h1>PRINT</h1>
</div>

<div className="recipesdetails__content2">
<img src={share}alt="" />
<h1>SHARE</h1>
</div>




</div>



  </div>

     {/*=======RECIPEDETAILS BOX======*/}

  <div className="recipedetailss__wrapper">

    <div  className="recipedetailss__wrapper__pics">
        <img src={img} alt="" />
    </div>

    <div className="recipedetails__text">
        <h1>Nutritional Information</h1>

     

        <div  className="recipedetails__text__content">
            <h2>Calories</h2>
            <p>219.9kcal</p>
        </div>

        <div  className="recipedetails__text__content">
            <h2>Calories</h2>
            <p>219.9kcal</p>
        </div>

        <div className="recipedetails__text__content">
            <h2>Calories</h2>
            <p>219.9kcal</p>
        </div>

        <div className="recipedetails__text__content">
            <h2>Calories</h2>
            <p>219.9kcal</p>
        </div>

        <div className="recipedetails__text__content">
            <h2>Calories</h2>
            <p>219.9kcal</p>
        </div>


        <h3>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
    </div>


  </div>

  
<div  className="heading__p"> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>

<Ingredients  />

<Deliciousness  />
<Otherrecipe  />


  </section>
  )
}

export default Recipesdetails