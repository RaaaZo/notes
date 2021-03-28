import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 10px;
        overflow-x: hidden;
        line-height: 1.5;
    }
    body {
        background: ${({ theme }) => theme.white};
        font-size: 2rem;
        font-family: ${({ theme }) => theme.roboto};
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.pangolin};
    }
    a {
        color: #000;
        text-decoration:none;
    }
    body::-webkit-scrollbar {
        width: 12px;
    }
    html {
        scrollbar-width: thin;
        scrollbar-color: ${({ theme }) =>
          `${theme.darkAccents} ${theme.white}`};
    }
    body::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.white};
    }
    body::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.darkAccents} ;
        border-radius: 6px;
        border: 3px solid #fff;
    }
`;

export default GlobalStyles;
