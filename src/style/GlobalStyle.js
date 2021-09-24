import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
        outline: none;
    }
    body{
       color: #333; 
       --type-first: Helvetica, Arial, sans-serif;
       --type-second: 'Spectral', Georgia;
    }
    ol, ul, li {
        list-style: none;
    }
    button{
        cursor: pointer;
        display: block;
        font-family: var(--type-first);
    }
    img {
        display: block;
        width: 100%;
    }
    .container{
        padding: 0 1rem;
        margin: 0 auto;
    }
`