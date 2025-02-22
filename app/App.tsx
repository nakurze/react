import { BrowserRouter, Routes, Route } from 'react-router'

import Home from '~/views/Home'
import Tabs from '~/views/Tabs'
import NotFound from '~/views/NotFound'
import Default from '~/layouts/Default'

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
