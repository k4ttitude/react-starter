import { PropsWithChildren, useState } from 'react'
import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import styled from 'styled-components'
import { useAuthStore } from '../store'
import { ReactComponent as MenuIcon } from '../MenuIcon.svg'

const item = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: ItemType[],
  type?: 'group'
): ItemType => ({ key, icon, children, label, type } as ItemType)

const items: ItemType[] = [
  item('Dashboard', 'dashboard'),
  item('Master Data', 'masterdata'),
  item('Reports', 'reports'),
  item('System Administration', 'system'),
]

type Props = PropsWithChildren<{}>

const AppLayout: React.FC<Props> = ({ children }) => {
  const { logout } = useAuthStore()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Container>
      <Header>
        <span
          style={{ width: '80px' }}
          className="flex items-center justify-center"
        >
          <MenuIcon
            width={24}
            height={24}
            className="cursor-pointer border-0"
            onClick={() => setCollapsed((c: boolean) => !c)}
          />
        </span>
        <span className="text-2xl font-bold text-white">SkyOffice</span>
      </Header>
      <section className="flex flex-auto flex-row">
        <SideBar>
          <Menu
            className="h-full"
            theme="light"
            // selectedKeys={['menuitems']}
            mode="inline"
            inlineCollapsed={collapsed}
            items={[
              ...items,
              { label: 'Logout', key: 'logout', onClick: logout },
            ]}
          />
        </SideBar>
        <Content>{children}</Content>
      </section>
    </Container>
  )
}

export default AppLayout

const Container = styled.section.attrs({
  className: 'h-screen w-screen flex flex-col',
})``

const Header = styled.header.attrs({
  className: 'flex h-14 p-3 bg-red-400 pl-0',
})`
  flex: 0 0 auto;
`

const SideBar = styled.aside`
  flex: 0 0 200px;
  max-width: 200px;
  min-width: 200px;
  width: 200px;
`

const Content = styled.main.attrs({ className: 'p-6 m-0 bg-white' })`
  flex: 1;
`
