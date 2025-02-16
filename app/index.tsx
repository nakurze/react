import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import Default from '~/layouts/Default'
import Home from '~/views/Home'
import Tabs from '~/views/Tabs'
import NotFound from '~/views/NotFound'
import '~/styles/Root.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<Tabs />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
