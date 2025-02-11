import { styled } from 'styled-components'

import Branding from '~/components/branding'
import Navigation from '~/components/navigation'

export default function Header() {
  return <AppHeader>
    <Branding />
    <Navigation />
  </AppHeader>
}

const AppHeader = styled.header`
  height: 6rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  background-color: darkslateblue;
`
