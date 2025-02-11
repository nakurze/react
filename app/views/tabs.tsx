import { useImmer } from 'use-immer'
import { styled } from 'styled-components'

import TabbedContent from '~/components/tabbed-content'
import Tab1 from '~/components/tab1'
import Tab2 from '~/components/tab2'

export default function Tabs() {
  const [items, setItems] = useImmer([{
    id: 1,
    title: 'Záložka 1',
    isActive: true,
    element: <Tab1 />
  }, {
    id: 2,
    title: 'Záložka 2',
    isActive: false,
    element: <Tab2 />
  }])

  const handleClick = (id: number): void => {
    setItems(draft => {
      draft.forEach((item, idx) => {
        draft[idx].isActive = id === item.id
      })
    })
  }

  return <StyledMain>
    <title lang="en">React SPA :: About</title>
    <meta name="keywords" content="Ďalšie zdroje" />
    <meta name="description" content="Popis tejto konkrétnej stránky" />

    <div>
      <StyledH2>React setState</StyledH2>
      <StyledH3>Príklad záložiek</StyledH3>
    </div>

    <TabbedContent items={items} handleClick={handleClick} />
  </StyledMain>
}

const StyledMain = styled.main`
  padding: 2rem;
  display: grid;
  grid-template-rows: auto 1fr;
  place-content: center;
  row-gap: 2rem;
`
const StyledH2 = styled.h2`
  margin: 0;
  padding-bottom: 0.5rem;
  text-align: center;
  border-bottom: 1px solid black;
`
const StyledH3 = styled.h3`
  margin: 0;
  padding-top: 0.5rem;
  text-align: center;
`
