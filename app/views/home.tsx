import { styled } from 'styled-components'

export default function Home() {
  return <StyledMain>
    <title lang="en">React SPA :: Home</title>
    <meta name="keywords" content="Úvodné info" />
    <meta name="description" content="Popis tejto konkrétnej stránky" />

    <StyledH2>Tu bude obsah<br />úvodnej stránky</StyledH2>
  </StyledMain>
}

const StyledMain = styled.main`
  padding: 2rem;
  display: grid;
  place-content: center;
`
const StyledH2 = styled.h2`
  margin: 0;
  text-align: center;
`
