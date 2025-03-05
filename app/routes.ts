import { useRoutes } from 'react-router'

import Main from '~/layouts/Main'
import Home from '~/views/Home'
import Tabs from '~/views/Tabs'
import NotFound from '~/views/NotFound'

export default function Routes () {
  return useRoutes([{ Component: Main, children: [
    { index: true, Component: Home },
    { path: 'tabs', Component: Tabs },
    { path: '*', Component: NotFound }
  ]}])
}
