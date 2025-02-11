import { Link } from 'react-router'
import { styled } from 'styled-components'

import reactLogo from '~/assets/logo.svg'

export default function Branding() {
  return <HomeLink to="/">
    <Logo src={reactLogo} alt="Logo firmy" />
    <Brand>React SPA</Brand>
  </HomeLink>
}

const HomeLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  text-decoration: none;
`
const Logo = styled.img`
  height: 4rem;
`
const Brand = styled.h1`
  margin: 0;
  color: white;
  font-family: sans-serif;
  font-size: 2rem;
  text-transform: uppercase;
`
