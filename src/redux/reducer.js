
const initialState = {
    WindowWidth:window.innerWidth,
    isBurgerActive:false
   }
  
  const reducer = (state = initialState, action)=> {
      switch (action.type) {
     
        case 'CHANGEWINDOWWIDTH':
          return{
            ...state,
            WindowWidth:action.width
           
          }
          case "SHOWHIDEMOBILEMENU":
          return {
            ...state,
            isBurgerActive:!state.isBurgerActive
          }
        default:
          return state
      }
    }
  
    export default reducer;