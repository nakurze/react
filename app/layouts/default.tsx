import '@fontsource/roboto'

import { createGlobalStyle } from 'styled-components'
import { Outlet } from 'react-router'

import Header from '~/components/header'

export default function Layout() {
  return <>
    <GlobalStyle />

    <Header />
    <Outlet />
  </>
}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Roboto";
  }
  react-spa#app {
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
  }
`
