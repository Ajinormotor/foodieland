import React from 'react'
import Deliciousness from '../UI/Deliciousness'

import Otherrecipe from '../UI/Otherrecipe'
import { useParams } from 'react-router-dom'
import blogdata from '../Asset/Data/blogdata'

import cooking from "../Asset/img/Rectangle 23.png"



import facebook from "../Asset/img/001-facebook.png"
import twitter from "../Asset/img/003-twitter.png"
import instagram from "../Asset/img/004-instagram.png"

import "../Styles/Blogdetails.css"

const Blogdetails = () => {

  const { id }  = useParams();
  console.log("ID from URL:", id); 

  const item = blogdata.find(item=> item.id===id);



  if(!item){
    console.log("File not Found");

    return <div>File Not Found</div>
  }

  const {text,pic,text2,paragraph,paragraph2,img} = item;


  return (
    <section  className="blogdetails"   id="blogdetails">


      <div className="blogdetails__wrapper">


{/*=========HEADING CONTENT WITH NAME AND IMAGE======*/}
      <div className="blogdetails__heading">

     <div className="blogdetails__heading__text">
     <h1>{text}</h1>
     </div>
      

     <div className="blogdetails__bottom__wrapper">

            <div className="blogitem__bottom__box">
            <img src={pic} alt="" />
  <h1>{text2}</h1>
            </div>

            <div className="blogdetails__bottom__box">
             <p className="blogitem__bottom__boxp">{paragraph2}</p>
            </div>

          </div>
       
          <div className="blogdetails__heading__p">
     <p>{paragraph}</p>
     </div>

        <div  className="blogdetails__pics">
          <img src={img} alt="" />
        </div>


        </div>

{/*=========SECOND HEADING======*/}

  <div className="blogdetails__content">

    <div className="blogdetails__content__wrapper">

      <div className="blogdetails2__text">

        <div  className="blodetails2__text2">
          <h1>How did you start out in the food industry?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            . Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>

        <div  className="blodetails2__text2">
          <h1>What do you like most about your job?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            . Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>

        <div  className="blodetails2__text2">
          <h1>Do you cook at home on your days off?</h1>

<img src={cooking} alt="" />
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            . Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>

        <div className="blodetails2__text2">
          <h1>What would your advice be to young people looking to get their foot in the door?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            . Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>

        <div  className="blodetails2__text2">
          <h1>How did you start out in the food industry?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar
            . Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
        </div>



      </div>

      <div className="blogetails__socials">

        <h1>SHARE THIS ON</h1>
        <ul className="blogetails__socials__menu">
          <li><img src={facebook} alt="" /></li>

          <li><img src={twitter} alt="" /></li>

          <li><img src={instagram} alt="" /></li>
        </ul>
      </div>

    </div>

  </div>





      </div>



      <Deliciousness  />
      <Otherrecipe  />


    </section>
  )
}

export default Blogdetails