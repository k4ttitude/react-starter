import { QueryClient, QueryClientProvider } from 'react-query'
import { Link, Navigate } from 'react-router-dom'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'
import './styles'
import { useAbilities } from './hooks/useAbilities'
import AppRoutes from './pages/AppRoutes'
import AppLayout from './layout'
import { useAuthStore } from './store'
import './App.css'

const queryClient = new QueryClient()

const App = () => {
  const { increasePopulation, logout, user } = useAuthStore()
  const abilities = useAbilities()

  if (!user) {
    return <Navigate to="/auth" />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Row className="w-full h-full">
          <Col
            span={8}
            className="flex flex-col justify-center items-start pl-8"
          >
            <MenuItem to="">Home</MenuItem>
            <MenuItem to="pokemons">Pokemons</MenuItem>
            {abilities.can('read', 'users') && (
              <MenuItem to="users">Users</MenuItem>
            )}
            <div className="flex gap-2 mt-4">
              <Button type="primary" onClick={increasePopulation}>
                Skip
              </Button>
              <Button type="primary" onClick={logout}>
                Logout
              </Button>
            </div>
          </Col>
          <Col
            span={16}
            className="flex flex-col justify-center overflow-hidden"
          >
            <AppRoutes />
          </Col>
        </Row>
      </AppLayout>
    </QueryClientProvider>
  )
}

export default App

const MenuItem = styled(Link).attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
