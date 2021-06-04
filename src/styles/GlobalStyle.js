import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
    font-size:62.5%;
    margin:0;
    font-family: 'Montserrat', sans-serif;
    padding:0;
    --blue:#4786ff;
    --grey:#99a1a7;
    --purple:#7047EB;
    --light-grey:rgba(166, 168, 179, 0.12);
}
html,body{
    background: #f5f7fa;
    color: #51565d;
}
*{
    box-sizing:border-box;
}`;

export default GlobalStyle;
