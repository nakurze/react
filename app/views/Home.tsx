import css from '~/styles/Home.module.css'

export default function Home () {
  return (
    <main className={css['main']}>
      <title>React :: Home</title>
      <meta name="keywords" lang="sk" content="Kľúčové slová" />
      <meta name="description" lang="sk" content="Popis tejto stránky" />

      <h2 className={css['h2']} lang="sk">
        Tu bude obsah<br />
        úvodnej stránky
      </h2>
    </main>
  )
}
