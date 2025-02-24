import type { Props } from '~/types/tabs'
import css from '~/styles/Tabbed.module.css'

export default function Tabbed ({ tabs, setActiveTab }: Props) {
  return (
    <div className={css.container}>
      <div className={css.links}>
        {tabs.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={item.isActive ? css.active : css.button}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className={css.content}>
        {tabs.find(tab => tab.isActive)?.component}
      </div>
    </div>
  )
}
