import { NavLink } from 'react-router'
import { styled } from 'styled-components'

export default function Navigation() {
  return <MainNav>
    <Link
      to="/"
      lang="en"
      className={({isActive}) => (isActive ? 'active' : '')}
    >Home</Link>

    <Link
      to="tabs"
      lang="en"
      className={({isActive}) => (isActive ? 'active' : '')}
    >Tabs</Link>
  </MainNav>
}

const MainNav = styled.nav`
  display: flex;
`
const Link = styled(NavLink)`
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: sans-serif;
  text-decoration: none;

  &.active {
    text-decoration: wavy underline;
  }
  &:not(.active):hover {
    text-decoration: wavy underline #ffffff70;
  }
`
