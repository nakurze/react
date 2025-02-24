import { Outlet } from 'react-router'
import { createGlobalStyle } from 'styled-components'
import Header from '~/components/Header'

const Layout = createGlobalStyle`
  body > div#root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr;
    font-family: sans-serif;
  }
`

export default function Default () {
  return <>
    <Layout />
    <Header />
    <Outlet />
  </>
}
