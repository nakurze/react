import { useState } from 'react'

import data from '~/data/tabs.json' with { type: 'json' }
import css from '~/styles/Tabs.module.css'
import Tabbed from '~/components/Tabbed'

export default function Tabs () {
  const [tabs, setTabs] = useState(data)

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

      <Tabbed tabs={tabs} handleClick={handleClick} />
    </main>
  )
}
