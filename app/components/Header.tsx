import Branding from '~/components/Branding'
import Navigation from '~/components/Navigation'
import css from '~/styles/Header.module.css'

export default function Header () {
  return (
    <header className={css.header}>
      <Branding />
      <Navigation />
    </header>
  )
}
