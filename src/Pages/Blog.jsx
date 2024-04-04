import React from 'react'

import "../Styles/Blog.css"

import Deliciousness from "../UI/Deliciousness"

import cheeseball from "../Asset/img/Mask Group (3).png"
import plate1 from "../Asset/img/image 26 (4).png"
import plate2 from "../Asset/img/Mask Group (4).png"

import ad from "../Asset/img/Ads.png"

import blogdata from '../Asset/Data/blogdata'


import { Link } from 'react-router-dom';


const Blog = () => {
  return (
    <section  className="blog"  id="blog">


      <div className="blog__heading">
        <h1>Blog & Article</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, 
          vero sint! Consectetur iusto possimus illum quisquam, minima mollitia,</p>

          <div  className="blog__search">
            <input type="text"   placeholder="Search article, news or recipe" />
            <button  className="blog__btn">Search</button>

          </div>

      </div>

      <div className="blog__wrapper">

        <div className="blog__box">

          {
            blogdata.map(item=>(
              
              <BlogItems item={item}  key={item.id} />
            ))
          }

        </div>

        <div className="blogs__box">
  <h1>Tasty Recipe</h1>

  <div className="blogsbox__wrapper">

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

   <div>
    <img src={ad} alt="" />
   </div>

  </div>

        </div>


      </div>

      <Deliciousness  />
  
   </section>
  )
}

const BlogItems =({item})  =>{

    const {id,img, text, text2, paragraph, paragraph2,pic} = item;
    
      return (
       <section className="blogitem"  id="blogitem">
    
        <div className="blogitem__wrapper">
    
            <div className="blogitem__pics">
                <img src={img} alt="" />
            </div>
    
            <div className="blogitem__text">
                <h1><Link to={`/blog/${id}`}>{text}</Link></h1>
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

export default Blog