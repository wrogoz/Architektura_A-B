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
    body{
    
    }
`