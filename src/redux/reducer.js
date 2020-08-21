
const initialState = {
    WindowWidth:window.innerWidth,
    isMenuOpen:false
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
            isMenuOpen:!state.isMenuOpen
          }
        default:
          return state
      }
    }
  
    export default reducer;