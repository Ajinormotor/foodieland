import React from 'react'


import "../Styles/otherrecipe.css"

import { Link } from 'react-router-dom'

import otherrecipedata from '../Asset/Data/otherrecipedata'

const Otherrecipe = () => {
  return (
<section className="otherrecipe"  id="otherrecipe">

<div className="recipe__heading">
 <h1>Check out the delicious recipes</h1>

</div>

<div className="recipe__wrapper">
    {
        otherrecipedata.map(item=>
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

    <div className="otherrecipe__box">
    
    <div  className="recipe__pics">

    <div  className="otherheart__icons">
        <img src={icon} alt=""  />
        </div>


<div  className="recipe__imgs">
<img src={img} alt="" />
</div>
       

       
       
    </div>

    <div className="recipe__text">
        <h1><Link  to={`/receipes/${id}`}>{text1}</Link></h1>
    </div>

    <div className="otherrecipe__bottom1">

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

export default Otherrecipe