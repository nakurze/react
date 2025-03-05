import { NavLink } from 'react-router'

import css from '~/styles/Navigation.module.css'

export default function Navigation () {
  return (
    <nav className={css.nav}>
      <NavLink className={css.navlink} to="/">Úvod</NavLink>
      <NavLink className={css.navlink} to="/tabs">Záložky</NavLink>
    </nav>
  )
}
