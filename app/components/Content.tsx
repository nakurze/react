import type { Props } from '~/types/tabs'

import css from '~/styles/Content.module.css'

export default function Content ({ tabs }: Props) {
  return (
    <p className={css.tabcontent} lang="zxx">
      {tabs.find(tab => tab.isActive)?.content}
    </p>
  )
}
