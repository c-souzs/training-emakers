import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: #FBF8F4;
  }

  img{
        max-width: 100%;
        display: block;
        object-fit: cover;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    ul{
        list-style: none;
    }
`
