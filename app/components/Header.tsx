import css from '~/styles/Header.module.css'
import Branding from '~/components/Branding'
import Navigation from '~/components/Navigation'

export default function Header () {
  return (
    <header className={css.header}>
      <Branding />
      <Navigation />
    </header>
  )
}
