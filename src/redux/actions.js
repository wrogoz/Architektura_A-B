export const changeWindowWidth = (width) => {
  return {
    type: "CHANGEWINDOWWIDTH",
    width,
  };
};

export  const changeWindowHeight = (height)=>{
  return {
    type:"CHANGEWINDOWHEIGHT",
    height
  };
}

export const showHideMobileMenu = () => {
  return { type: "SHOWHIDEMOBILEMENU" };
};
