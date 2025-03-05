import type { Props } from '~/types/tabs'

import css from '~/styles/Tabbed.module.css'
import Buttons from '~/components/Buttons'
import Content from '~/components/Content'

export default function Tabbed (props: Props) {
  return (
    <div className={css.container}>
      <div className={css.buttons}>
        <Buttons {...props} />
      </div>
      
      <div className={css.content}>
        <Content tabs={props.tabs} handleClick={props.handleClick} />
      </div>
    </div>
  )
}
