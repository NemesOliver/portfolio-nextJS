import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    

    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: Montserrat;
        background-color: ${({ theme }) => theme.backgroundColor};
        color: ${({ theme }) => theme.color};
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }


    h1 {
        font-size: 6.75rem; /* 102px */
        font-weight: 900;
    }

    h2 {
        font-size: 4.5rem;  /* 72px */
        font-weight: 900;
    }

    h3 {
        font-size: 1.5rem;  /* 24px */ 
        font-weight: 700;
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }

    .hr {
    width: 70%;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    margin: 150px auto;
  }

    body::-webkit-scrollbar {
        width: 0.3em;
        
    }       
 
    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.primary};
        outline: none;
        border-radius: 50px;
    }


`;

export default GlobalStyles;
