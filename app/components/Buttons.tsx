import type { Props } from '~/types/tabs'

import css from '~/styles/Buttons.module.css'

export default function Buttons ({ tabs, handleClick }: Props) {
  return tabs.map((item) => (
    <button
      type="button"
      key={item.id}
      onClick={() => handleClick(item.id)}
      className={item.isActive ? css.active : css.button}
    >
      {item.title}
    </button>
  ))
}
