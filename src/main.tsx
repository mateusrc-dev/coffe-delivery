import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { RequestContextProvider } from './contexts/contextRequest'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={defaultTheme}>
    <BrowserRouter>
      <React.StrictMode>
        <RequestContextProvider>
          <Router />
        </RequestContextProvider>
        <GlobalStyle />
      </React.StrictMode>
    </BrowserRouter>
  </ThemeProvider>,
)
