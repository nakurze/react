import { Link } from 'react-router'

import reactLogo from '~/assets/logo.svg'
import css from '~/styles/Branding.module.css'

export default function Branding () {
  return (
    <Link className={css.link} to="/">
      <img src={reactLogo} className={css.img} alt="Logo" />
      <h1 className={css.h1}>React</h1>
    </Link>
  )
}
