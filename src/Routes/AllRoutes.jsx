import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import Cart from './Cart'
import Home from './Home'
import Login from './Login'
import Men from './Men'
import SignUp from './SignUp'
import SingleProduct from './SingleProduct'
import Women from './Women'

const AllRoutes = () => {
  const {singlePageData}=useContext(AppContext)
  return (
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/men" element={<Men/>}/>
      <Route path="/women" element={<Women/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
      {/* <Route path="/men/singleproduct/:id" element={<SingleProduct/>}/> */}
      
    </Routes>
  )
}

export default AllRoutes

// https://www.bewakoof.com/v1/v2/products/thug-jerry-navy-blue-boyfriend-t-shirt-for-women