import { PropsWithChildren } from 'react'
import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import styled from 'styled-components'

const item = (
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: ItemType[],
  type?: 'group' | 'divider'
): ItemType => ({ key, icon, children, label, type } as ItemType)

const items: ItemType[] = [
  item('Dashboard', 'dashboard'),
  item('Master Data', 'masterdata', undefined, undefined, 'divider'),
  item('Menu Items', 'menuitems'),
  item('Modifiers', 'modifiers'),
  item('Reports', 'reports'),
  item('System Administration', 'system'),
]

type Props = PropsWithChildren<{}>

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>
        <span className="text-2xl font-bold text-white">SkyOffice</span>
      </Header>
      <section className="flex flex-auto flex-row">
        <SideBar>
          <Menu
            className="h-full"
            theme="dark"
            // selectedKeys={['menuitems']}
            mode="inline"
            items={items}
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
  className: 'flex h-14 p-3 bg-red-400',
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
