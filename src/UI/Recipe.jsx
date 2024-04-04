import React from 'react'
import "../Styles/Recipe.css"

import recipedata1 from '../Asset/Data/recipedata1'
import { Link } from 'react-router-dom'

const Recipe = () => {
  return (
    <section className="recipe"  id="recipe">

<div className="recipe__heading">
 <h1>Simple and tasty recipes</h1>
 <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqut enim ad minim</p>
</div>

<div className="recipe__wrapper">
    {
        recipedata1.map(item=>
            (
                <RecipeItem  item ={item}  key={item.id}/>
            )
            
            )
    }

</div>

    </section>
  )
}


const RecipeItem = ({item}) =>{

    const {id, img, icon, text1, text2, text3, time, fork} = item;


    return(

    <div className="recipe__box">
    
    <div  className="recipe__pics">

    <div  className="heart__icons">
        <img src={icon} alt=""  />
        </div>


<div  className="recipe__imgs">
<img src={img} alt="" />
</div>
       

       
       
    </div>

    <div className="recipe__text">
        <h1><Link  to={`/receipes/${id}`}>{text1}</Link></h1>
    </div>

    <div className="recipe__bottom1">

        <div className="recipebottom1__content">
                <img src={time} alt="" />
                <p>{text2}</p>
            </div>

            <div  className="recipebottom1__content">
                <img src={fork} alt="" />
                <p>{text3}</p>
            </div>

          

        </div>


    </div>
    )


}

export default Recipe