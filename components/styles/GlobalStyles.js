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
    }

    a {
        text-decoration: none;
        
    }

    li {
        text-decoration: none;
    }

    h1 {
        font-size: 6.75rem;
        font-weight: 900;
    }

    h2 {
        font-size: 4.5rem;
        font-weight: 900;
    }

    h3 {
        font-weight: 24px;
        font-weight: 700;
    }

    p {
        font-size: 16px;
        font-weight: 400;
    }


`;

export default GlobalStyles;
