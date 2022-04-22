import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import logo from './logo.svg'
import { useAuthStore } from './store'
import './App.css'

const App = () => {
  const { increasePopulation, logout, isLoggedIn } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/auth')
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-red-500">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary" onClick={increasePopulation}>
          Skip
        </Button>
        <Button type="primary" onClick={logout}>
          Logout
        </Button>
      </header>
    </div>
  )
}

export default App
