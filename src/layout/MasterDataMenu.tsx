import { useNavigate } from 'react-router-dom'
import { MenuItemGroup } from 'rc-menu'
import { Menu, MenuItem } from '../components/Menu'

const MasterDataMenu = () => {
  const navigate = useNavigate()

  return (
    <Menu className="h-full flex flex-col">
      <MenuItemGroup title="Menu">
        <MenuItem key="/menu-items/">Menu Items</MenuItem>
        <MenuItem key="/modifier-schemes/" onClick={() => {}}>
          Modifier schmes
        </MenuItem>
        <MenuItem key="/modifier-groups/">Modifier groups</MenuItem>
        <MenuItem key="/combo-groups/">Combo groups</MenuItem>
        <MenuItem key="/combo-schemes">Combo schemes</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup title="Finance">
        <MenuItem key="/discounts/">Discount</MenuItem>
        <MenuItem key="/tax/">Tax groups</MenuItem>
        <MenuItem key="/currencies/">Currencies</MenuItem>
      </MenuItemGroup>
      <MenuItemGroup title="Administration">
        <MenuItem key="/restaurants/">Restaurants</MenuItem>
        <MenuItem key="/employees/">Employees</MenuItem>
      </MenuItemGroup>
    </Menu>
  )
}

export default MasterDataMenu
