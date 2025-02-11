import { Link } from 'react-router'
import { styled } from 'styled-components'

export default function NotFound() {
  return <StyledMain>
    <title>React SPA</title>

    <StyledH2>Stránka nenájdená</StyledH2>
    <StyledH3>Návrat na <Link to="/" lang="en">Home</Link></StyledH3>
  </StyledMain>
}

const StyledMain = styled.main`
  padding: 2rem;
  display: grid;
  row-gap: 2rem;
  place-content: center;
`
const StyledH2 = styled.h2`
  margin: 0;
  text-align: center;
`
const StyledH3 = styled.h3`
  margin: 0;
  text-align: center;
`
