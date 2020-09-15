
const initialState = {
    WindowWidth:window.innerWidth,
    WindowHeight:window.innerHeight,
    isMenuOpen:false
   }
  
  const reducer = (state = initialState, action)=> {
      switch (action.type) {
     
        case 'CHANGEWINDOWWIDTH':
          return{
            ...state,
            WindowWidth:action.width
           
          }
          case 'CHANGEWINDOWHEIGHT':
          return{
            ...state,
            WindowHeight:action.height
           
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