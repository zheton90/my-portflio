import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";


export const GlobalStyled = createGlobalStyle`
*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    background-color: ${Theme.colors.lightBg};
}

a{
    text-decoration: none;
    color: ${Theme.colors.font};
    cursor: pointer;
}

ul{
    list-style: none;
}

section{
    margin-top: 140px;
    background-color: ${Theme.colors.lightBg};
    margin-left: 10px;
    margin-right: 10px;

    @media ${Theme.media.tablet}{
        margin-top: 100px;
    }
    
}

button {
    background-color: unset;
    border: none;
}


`
