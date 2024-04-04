import React from 'react'

import "../Styles/Hero.css"

import mask from "../Asset/img/Mask Group.png"
import badge  from "../Asset/img/Badge.png"

import spoon from "../Asset/img/ForkKnife - Copy.png"
import clock from "../Asset/img/Vector.png"

import play from "../Asset/img/PlayCircle.png"
import john from "../Asset/img/Ellipse 2.png"

import scroll from "../Asset/img/image 14.png"

const Hero = () => {
  return (
 <section  className="hero"  id="hero">

    <div className="hero__wrapper">

        <div className="hero__text">

            <div  className="hero__head">
 <div>
      <img src={scroll} alt="" />
  </div>
     

     <div>
     <p>Hot Recipes</p>
     </div>
            

            </div>


            <div  className="hero__content">
            <h1>Spicy delicious chicken wings</h1>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqut
                 enim ad minim</p>
        </div>


{/*======FIRST HERO BOTTOM=====*/}
        <div className="hero__bottom1">

        <div className="herobottom1__content">
                <img src={clock} alt="" />
                <p>30 Mintues</p>
            </div>

            <div  className="herobottom1__content">
                <img src={spoon} alt="" />
                <p>Chicken</p>
            </div>

          

        </div>

        {/*======SECOND HERO BOTTOM=====*/}
        <div className="hero__bottom2">

<div  className="herobottom2__content">
    <img src={john} alt="" />
    <p>John Smith   <span>15 march 2022</span> </p> 
 
</div>

<div className="herobottom2__play">

    <p>View Recipes</p>
    <img src={play} alt="" />
  
</div>

</div>

        </div>

        


        <div className="hero__pics">
            <img src={mask} alt=""   class="mask"/>
            <img src={badge} alt=""   className="badges"/>
        </div>

    </div>

 </section>
  )
}

export default Hero