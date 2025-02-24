type TabItem = {
  id: number
  title: string
  isActive: boolean
  component: React.ReactNode
}

export type Props = {
  tabs: TabItem[]
  setActiveTab: (id: number) => void
}
