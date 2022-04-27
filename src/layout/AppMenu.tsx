import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, MenuItem } from '../components/Menu'
import { useAuthStore } from '../store'
import 'rc-menu/assets/index.css'

const AppMenu = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { logout } = useAuthStore()

  return (
    <Menu className="h-full flex flex-col" selectedKeys={[pathname]}>
      <MenuItem key="/" onClick={() => navigate('/')}>
        Dashboard
      </MenuItem>
      <MenuItem key="/menu/" onClick={() => navigate('/menu/')}>
        Master Data
      </MenuItem>
      <MenuItem disabled>Reports</MenuItem>
      <MenuItem disabled>System Administration</MenuItem>
      <MenuItem onClick={logout} className="mt-auto">
        Logout
      </MenuItem>
    </Menu>
  )
}

export default AppMenu
