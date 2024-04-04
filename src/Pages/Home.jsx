import React from 'react'
import Hero from '../UI/Hero'
import Categories from '../UI/Categories'
import Everyone from '../UI/Everyone'
import Checkout from '../UI/Checkout'
import Deliciousness from '../UI/Deliciousness'
import Recipe from '../UI/Recipe'
import Recipe2 from '../UI/Recipe2'

const Home = () => {
  return (
    <section  className="home"  id="home">
    <Hero  />
    <Categories />
    <Recipe  />
    <Everyone  />
    <Checkout />
    <Recipe2  />
    <Deliciousness  />
   </section>
  )
}

export default Home