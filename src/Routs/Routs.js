import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Receipes from '../Pages/Receipes'
import Contat from '../Pages/Contat'
import Blog from '../Pages/Blog'
import Recipesdetails from '../Pages/Recipesdetails'
import Blogdetails from '../Pages/Blogdetails'

const Routs = () => {
  return (
<Routes>
<Route path='/'  element={<Navigate to='/home'   />}    />
<Route  path='/home'   element={<Home  />}     />
<Route  path='/receipes'   element={<Receipes  />}     />
<Route  path='/receipes/:id'   element={<Recipesdetails  />}     />
<Route  path='/blog'   element={<Blog  />}     />
<Route  path='/blog/:id'   element={<Blogdetails  />}     />
<Route  path='/contact'   element={<Contat  />}     />
<Route  path='/about'   element={<About  />}     />

<Route path='*'  element={<Navigate to='/home'  />}    />



</Routes>
  )
}

export default Routs