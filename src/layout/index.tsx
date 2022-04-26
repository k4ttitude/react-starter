import { PropsWithChildren } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import AppMenu from './App'

type Props = PropsWithChildren<{}>

const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header>
        <span className="text-2xl font-bold text-white">SkyOffice</span>
      </Header>
      <section className="flex flex-auto flex-row">
        <SideBar>
          <Routes>
            <Route path="/" element={<AppMenu />} />
            <Route path="/menu/*" element={<Link to="/">Menu khac</Link>} />
          </Routes>
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
