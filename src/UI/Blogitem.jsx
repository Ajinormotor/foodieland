import React from 'react'

import "../Styles/Blog.css"
import { Link } from 'react-router-dom';

const Blogitem = ({item}) => {


const {id,img, text, text2, paragraph, paragraph2,pic} = item;

  return (
   <section className="blogitem"  id="blogitem">

    <div className="blogitem__wrapper">

        <div className="blogitem__pics">
            <img src={img} alt="" />
        </div>

        <div className="blogitem__text">
            <h1><Link to={`/blog/:${id}`}>{text}</Link></h1>
            <p>{paragraph}</p>

{/*=======BLOG BOTTOM=======*/}
            <div className="blogitem__bottom__wrapper">

            <div className="blogitem__bottom__box">
            <img src={pic} alt="" />
  <h1>{text2}</h1>
            </div>

        

            <div className="blogitem__bottom__box">
             <p className="blogitem__bottom__boxp">{paragraph2}</p>
            </div>


            </div>

        </div>
    </div>
    
  

   </section>
  )
}

export default Blogitem