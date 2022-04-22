import { Navigate } from 'react-router-dom'
import { Button } from 'antd'
import styled from 'styled-components'
import { useAbilities } from './hooks/useAbilities'
import { useAuthStore } from './store'
import logo from './logo.svg'
import './App.css'

const App = () => {
  const { increasePopulation, logout, user } = useAuthStore()
  const abilities = useAbilities()

  if (!user) {
    return <Navigate to="/auth" />
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-cyan-500">
          Signed in as <b>{user.name}</b>
        </p>
        <div className="flex gap-2">
          <Button type="primary" onClick={increasePopulation}>
            Skip
          </Button>
          <Button type="primary" onClick={logout}>
            Logout
          </Button>
        </div>
        <div className="flex flex-col mt-4">
          <MenuItem>Menu</MenuItem>
          {abilities.can('read', 'users') && <MenuItem>Users</MenuItem>}
        </div>
      </header>
    </div>
  )
}

export default App

const MenuItem = styled.span.attrs(() => ({
  className: 'cursor-pointer hover:text-cyan-200',
}))``
