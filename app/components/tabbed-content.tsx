import type { ReactNode } from 'react'
import { styled } from 'styled-components'

type Props = {
  items: TabItem[],
  handleClick: (id: number) => void
}

type TabItem = {
  id: number
  title: string
  isActive: boolean
  element: ReactNode
}

export default function TabbedContent({ items, handleClick }: Props) {
  function TabContent () {
    return items.find(item => item.isActive)?.element
  }

  return <TabsContainer>
    <TabLinks>{
      items.map((item) => (
        <StyledButton
          type="button"
          key={item.id}
          onClick={() => handleClick(item.id)}
          className={item.isActive ? 'active' : ''}
        >
          {item.title}
        </StyledButton>
      ))
    }</TabLinks>

    <ContentContainer>
      <TabContent />
    </ContentContainer>
  </TabsContainer>
}

const TabsContainer = styled.div`
  min-height: 100%;
  max-width: 76rem;
  display: grid;
  grid-template-rows: auto 1fr;
`
const TabLinks = styled.div`
  position: relative;
  top: 1px;
`
const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 8px 8px 0 0;

  &.active {
    border-bottom: 1px solid white;
  }
  &:not(:first-of-type) {
    margin-left: -1px;
  }
`
const ContentContainer = styled.div`
  padding: 1rem;
  border: 1px solid black;
`
