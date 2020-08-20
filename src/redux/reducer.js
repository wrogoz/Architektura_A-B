
const initialState = {
    WindowWidth:window.innerWidth
   }
  
  const reducer = (state = initialState, action)=> {
      switch (action.type) {
     
        case 'CHANGEWINDOWWIDTH':
          return{
            ...state,
            WindowWidth:action.width
           
          }
        default:
          return state
      }
    }
  
    export default reducer;