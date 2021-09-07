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
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    overscroll-behavior-y: contain;
}
.hideScrollBar{
    overflow: hidden;
}    
`