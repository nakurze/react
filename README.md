## Poznámky ku kódu

Zdrojový text tohoto príkladu nutne nereflektuje bežnú korporátnu prax. Adresárová štruktúra a syntaktické konštrukcie boli ponechané v pôvodnom stave, tak ako vznikli počas kurzu. Nezvyklý zápis index.html a index.ts, css použité až tromi spôsobmi, alebo nekonzistentné konštrukcie ako tu, ...

```js
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
```

... kde sú props poslané raz tak, raz tak, všetko je v kóde zámerne. Rovnako ako return v komponentoch ktorý raz vracia zátvorky, raz fragment, raz array, či až kryptická definícia routes. Tu to demonštruje rôzne možnosti, v praxi to rieši Prettier. A výsledné logické členenie kódu, napríklad že sme sa dopustili "props drilling" následkom implementácie "lifting state up" princípu, to je vyslovene pointa tohoto kurzu.

Vybuildovaný príklad beží na doméne [react.nakurze.sk](https://react.nakurze.sk).