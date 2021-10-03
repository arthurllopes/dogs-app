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
       --type-second: 'Spectral', serif;
    }
    a{
        color: #333;
        text-decoration: none;
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
    .animeLeft{
        opacity: 0;
        transform: translateX(-30px);
        animation: animeLeft .6s forwards;
    }
    @keyframes animeLeft{
        to {
            opacity: 1;
            transform: initial;
        }
    }
    .App{
        display: flex;
        flex-direction: column;
        min-height: calc(100vh + 10rem);
    }
    .body{
        flex: 1;
    }
`