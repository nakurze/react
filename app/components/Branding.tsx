import { Link } from 'react-router'
import css from '~/styles/Branding.module.css'
import reactLogo from '~/assets/logo.svg'

export default function Branding () {
  return (
    <Link className={css['Link']} to="/">
      <img src={reactLogo} className={css['img']} alt="Logo firmy" />
      <h1 className={css['h1']}>React</h1>
    </Link>
  )
}
