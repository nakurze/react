import { Outlet } from 'react-router'
import { createGlobalStyle } from 'styled-components'

import Header from '~/components/Header'

const LayoutContainer = createGlobalStyle`
  body > layout-container {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    font-family: sans-serif;
  }
`

export default function Main () {
  return <>
    <LayoutContainer />
    <Header />
    <Outlet />
  </>
}
