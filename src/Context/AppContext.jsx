import React, { createContext, useReducer, useState } from 'react'
import { reducer } from './Reducer';

export const AppContext =createContext();
const initState={
  isAuth:false,
  token:"Login",
  isError:false,
  isLoading:false,
  isMen:true,
  isWomen:false,
  
}
const AppContextProvider = ({children}) => {
  const [state,dispatch] =useReducer(reducer,initState)
  const [toggle,setToggle]=useState(true);
  const handleToggle=()=>{
    setToggle(!toggle)
  }
  const [item,setItem]=useState(0);
const handleItem=()=>{
  setItem(item+1)
}
  const initdata={
    manufacturer_brand:"",
  average_rating:"",
  member_price:"",
  price:"",
  key:"",
  mrp:"",
  tribe_text:"",
  display_image:"",
  custom_name:"",
  url:"",
  color:"",
  name:"",
  product_sizes:[],
  designer:"",
  product_discount:"",
  all_offer_price:""
  }
  const [singlePageData,setSinglePageData]=useState(initdata)

 return <AppContext.Provider value={{state,dispatch,toggle,handleToggle,singlePageData,setSinglePageData,handleItem,item}} >
  {children}
 </AppContext.Provider>
}

export default AppContextProvider
// all_offer_price: 1299
// average_rating: 4.6
// brand: null
// cat_designer: ""
// category: "T-Shirt"
// category_info: {gender: 'Men', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// child_category: {gender: 'Men', subclass: 'T-Shirt', id: 43, name: 'T-Shirt', url: ''}
// coin_statement: null
// color: ['black']
// color_name: null
// custom_name: "Men's Black Dab Marshmello T-shirt"
// description: ""
// design: "Printed"
// designer: "bewakoof"
// display_image: "men-s-black-dab-marshmello-t-shirt-206423-1655747893-1.jpg"
// experiment_id: null
// flip_image: null
// gender: "Men"
// group_count: 0
// id: 206423
// in_stock: 1
// limited_edition: false
// manufacturer_brand: "Bewakoof"
// material: "Cotton"
// member_discount: "74% OFF"
// member_price: 329
// model: null
// mrp: 1299
// name: "Men's Black Dab Marshmello T-shirt"
// offer: "14% OFF"
// offer_type: "best_seller"
// parent_category: null
// price: 349
// product_discount: "73% OFF"
// product_sizes: Array(6)
// 0: {id: 387885, name: 'S', stock_status: true}
// 1: {id: 387886, name: 'M', stock_status: true}
// 2: {id: 387887, name: 'L', stock_status: true}
// 3: {id: 387888, name: 'XL', stock_status: true}
// 4: {id: 387889, name: '2XL', stock_status: true}
// 5: {id: 387890, name: '3XL', stock_status: false}
// length: 6
// [[Prototype]]: Array(0)
// ptype: "single"
// sp: null
// status: 1
// stock_status: true
// subclass: "T-Shirt"
// tags: []
// tribe_header: null
// tribe_image_url: ""
// tribe_text: "For TriBe Members"
// upgraded_dimension: true
// url: "dab-marshmello-black-full-sleeve-t-shirt-for-men"