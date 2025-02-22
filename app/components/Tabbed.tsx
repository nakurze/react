import css from '~/styles/Tabbed.module.css'

type TabItem = {
  id: number
  title: string
  isActive: boolean
  component: React.ReactNode
}

type Props = {
  tabs: TabItem[]
  handleClick: (id: number) => void
}

export default function Tabbed ({ tabs, handleClick }: Props) {
  return (
    <div className={css['container']}>
      <div className={css['links']}>
        {tabs.map((item) => (
          <button
            type="button"
            lang="sk"
            key={item.id}
            onClick={() => handleClick(item.id)}
            className={item.isActive ? css['active'] : css['button']}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className={css['content']}>
        {tabs.find(tab => tab.isActive)?.component}
      </div>
    </div>
  )
}
