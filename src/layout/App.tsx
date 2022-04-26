import { useLocation, useNavigate } from 'react-router-dom'
import { SMenu, SMenuItem } from '../components/Menu'
import { useAuthStore } from '../store'
import 'rc-menu/assets/index.css'

const AppMenu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  return (
    <SMenu className="h-full flex flex-col" selectedKeys={[pathname]}>
      <SMenuItem key="/" onClick={() => navigate('/')}>
        Dashboard
      </SMenuItem>
      <SMenuItem key="/menu/" onClick={() => navigate('/menu/')}>
        Master Data
      </SMenuItem>
      <SMenuItem disabled>Reports</SMenuItem>
      <SMenuItem disabled>System Administration</SMenuItem>
      <SMenuItem onClick={logout} className="mt-auto">
        Logout
      </SMenuItem>
    </SMenu>
  )
}

export default AppMenu
