import { QueryClient, QueryClientProvider } from 'react-query'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Button, Col, Row } from 'antd'
import styled from 'styled-components'
import { useAbilities } from './hooks/useAbilities'
import Pokemons from './pages/Pokemons'
import { useAuthStore } from './store'
import logo from './logo.svg'
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
      <div className="App">
        <header className="App-header">
          <Row className="w-full">
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
            <Col span={16}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <img src={logo} className="App-logo" alt="logo" />
                      <p className="text-cyan-500">
                        Signed in as <b>{user.username}</b>
                      </p>
                    </>
                  }
                />
                <Route path="pokemons/*" element={<Pokemons />} />
                <Route path="users/*" element={<div>Users</div>} />
              </Routes>
            </Col>
          </Row>
        </header>
      </div>
    </QueryClientProvider>
  )
}

export default App

const MenuItem = styled(Link).attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
