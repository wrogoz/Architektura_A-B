import {createGlobalStyle} from 'styled-components';

import interblack from './Inter-Light-BETA.woff';

export default createGlobalStyle`
    @font-face {
        font-family:interblack;
        src: url(${interblack}) format('woff');
        font-weight:normal;
        font-style:normal;       
    }
`