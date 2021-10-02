import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Oswald', sans-serif;
        font-family: 'Roboto', sans-serif; 
        color: white;
    }
    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        /* margin: 0px;
        padding: 0px */
    }
`;

export default GlobalStyle;
