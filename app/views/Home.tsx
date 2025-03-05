import css from '~/styles/Home.module.css'

export default function Home () {
  return (
    <main className={css.main}>
      <title>React :: Úvod</title>
      <meta name="keywords" content="Kľúčové slová" />
      <meta name="description" content="Popis tejto stránky" />

      <h2 className={css.h2}>
        Tu bude obsah<br />
        úvodnej stránky
      </h2>
    </main>
  )
}
