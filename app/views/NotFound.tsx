import { Link } from 'react-router'
import css from '~/styles/NotFound.module.css'

export default function NotFound () {
  return (
    <main className={css.main}>
      <title>React</title>

      <h2 className={css.h2}>Stránka nenájdená</h2>
      <h3 className={css.h3}>Návrat na <Link to="/">Home</Link></h3>
    </main>
  )
}
