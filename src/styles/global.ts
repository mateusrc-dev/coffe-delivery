import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme['purple-200']};
  }

  body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['brown-100']};
    overflow: hidden;
    width: 100%;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
