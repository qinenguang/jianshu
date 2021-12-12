import {createGlobalStyle} from 'styled-components'
const GlobalStyleTwo = createGlobalStyle`
    @font-face {
        font-family: "iconfont"; /* Project id 3000054 */
        src: url('./iconfont.eot?t=1639288873080'); /* IE9 */
        src: url('./iconfont.eot?t=1639288873080#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('iconfont.woff?t=1639288873080') format('woff'),
            url('./iconfont.ttf?t=1639288873080') format('truetype'),
            url('./iconfont.svg?t=1639288873080#iconfont') format('svg');
    }
    
    .iconfont {
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }`

export {GlobalStyleTwo};    
    