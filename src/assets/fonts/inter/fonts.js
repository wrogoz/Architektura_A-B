import {createGlobalStyle} from 'styled-components';

import interblack from './Inter-Light-BETA.woff';
import interBlackBold from './Inter-Medium.woff'

export default createGlobalStyle`
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
`