import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'

import Routes from '~/routes'

export default function App () {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StrictMode>
  )
}
