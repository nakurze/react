import { NavLink } from 'react-router'
import css from '~/styles/Navigation.module.css'

export default function Navigation () {
  return (
    <nav className={css['nav']}>
      <NavLink className={css['NavLink'] as string} to="/">Home</NavLink>
      <NavLink className={css['NavLink'] as string} to="/tabs">Tabs</NavLink>
    </nav>
  )
}
