export function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuth: true,
        token: action.payload,
        isLoading:false
       

      };
    case "LOGIN_FAILURE":
      return { ...state, isError: true, token: null };
    case "GET_PRODUCTS_REQUEST":
      return { ...state, isLoading: true };
    case "GET_PRODUCTS_SUCCESS":
      return { ...state, isLoading:false, isError:false};
    case "GET_PRODUCTS_FAILURE":
      return { ...state, isError: true, token: null };
      case "HOME_MEN":
        return {...state, isWomen:false, isMen:true };
        case "HOME_WOMEN":
        return {...state, isWomen:true, isMen:false};
      default:
        return state
  }
}