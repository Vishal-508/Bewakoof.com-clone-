export const loginRequest ={
  type:"LOGIN_REQUEST"
}
export const loginSuccess =(token)=>{
     return {type:"LOGIN_SUCCESS",
    payload:token}
  }
  export const loginFailure ={
    type:"LOGIN_FAILURE"
  }
  export const productRequest ={
    type:"GET_PRODUCTS_REQUEST"
  }
  export const productSuccess ={
    type:"GET_PRODUCTS_SUCCESS"
  }
  export const productFailure ={
    type:"GET_PRODUCTS_FAILURE"
  }
  export const productHomeMen ={
    type:"HOME_MEN"
  }
  export const productHomeWomen ={
    type:"HOME_WOMEN"
  }