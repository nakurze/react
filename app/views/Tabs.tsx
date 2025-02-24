import { useState } from 'react'

import css from '~/styles/Tabs.module.css'
import Tabbed from '~/components/Tabbed'
import Tab1 from '~/components/Tab1'
import Tab2 from '~/components/Tab2'

export default function Tabs () {
  const [tabs, setTabs] = useState([{
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
    setTabs(tabs => tabs.map(tab => ({
      ...tab,
      isActive: id === tab.id
    })))
  }

  return (
    <main className={css.main}>
      <title>React :: Záložky</title>
      <meta name="keywords" content="Kľúčové slová" />
      <meta name="description" content="Popis tejto stránky" />

      <div>
        <h2 className={css.h2}>React - setState</h2>
        <h3 className={css.h3}>Príklad záložiek</h3>
      </div>

      <Tabbed tabs={tabs} setActiveTab={handleClick} />
    </main>
  )
}
