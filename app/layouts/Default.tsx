import '~/styles/Default.css'

import { Outlet } from 'react-router'
import Header from '~/components/Header'

export default function Default () {
  return <>
    <Header />
    <Outlet />
  </>
}
