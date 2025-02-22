import { useState } from 'react'

import Tabbed from '~/components/Tabbed'
import Tab1 from '~/components/Tab1'
import Tab2 from '~/components/Tab2'
import css from '~/styles/Tabs.module.css'

export default function Tabs () {
  const [tabs, setActiveTab] = useState([{
    id: 1,
    title: 'Záložka 1',
    isActive: true,
    component: Tab1()
  }, {
    id: 2,
    title: 'Záložka 2',
    isActive: false,
    component: <Tab2 />
  }])

  const handleClick = (id: number) => {
    setActiveTab(tabs => tabs.map(tab => ({
      ...tab,
      isActive: id === tab.id
    })))
  }

  return (
    <main className={css['main']}>
      <title>React :: Tabs</title>
      <meta name="keywords" lang="sk" content="Kľúčové slová" />
      <meta name="description" lang="sk" content="Popis tejto stránky" />

      <div>
        <h2 className={css['h2']}>React - setState</h2>
        <h3 className={css['h3']} lang="sk">Príklad záložiek</h3>
      </div>

      <Tabbed tabs={tabs} handleClick={handleClick} />
    </main>
  )
}
