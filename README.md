## Dôležité upozornenie

Zdrojový text tohoto príkladu nereflektuje nutne bežnú korporátnu prax. Adresárová štruktúra a syntaktické konštrukcie boli ponechané v pôvodnom stave, tak ako vznikli počas kurzu. Až príliš úsporný syntax, či niektoré nekonzistetné zápisy 

```js
const [tabs, setTabs] = useState([{
  id: 1,
  title: 'Záložka 1',
  isActive: true,
  component: Tab1()
}, {
  id: 2,
  title: 'Záložka 2',
  isActive: false,
  component: <Tab2 />
}])
```

boli taktiež ponechané zámerne. V praxi to rieši Prettier, tu to demonštruje rôzne možnosti. Vybuildovaný príklad beží na doméne [react.nakurze.sk](https://react.nakurze.sk).