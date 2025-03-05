type TabItem = {
  id: number
  title: string
  isActive: boolean
  content: string
}

export type Props = {
  tabs: TabItem[]
  handleClick: (id: number) => void
}
