import {createGlobalStyle} from 'styled-components';

import interblack from './assets/fonts/inter/Inter-Light-BETA.woff'
import interBlackBold from './assets/fonts/inter/Inter-Medium.woff'

export const GlobalStyles= createGlobalStyle`
    @font-face {
        font-family:interblack;
        src: url(${interblack}) format('woff');
        font-weight:normal;
        font-style:normal;
    }
    @font-face {
        font-family:interBlackBold;
        src: url(${interBlackBold}) format('woff');
        font-weight:normal;
        font-style:normal;
    }
    *{
        margin:0;
        padding:0;
        border: 0;
        font-size:100%;
    }
    body{
        overflow-x:hidden;
        overflow-y: overlay;
        scrollbar-width:none;
        ::-webkit-scrollbar { display: none; }
        margin:0;
        padding:0;
        box-sizing:border-box;
      
    }
    
`