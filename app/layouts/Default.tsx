import { Outlet } from 'react-router'
import Header from '~/components/Header'
import '~/styles/Default.module.css'

export default function Default () {
  return <>
    <Header />
    <Outlet />
  </>
}
