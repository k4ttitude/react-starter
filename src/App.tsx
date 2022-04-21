import { useEffect, useState } from 'react'
import { Button } from 'antd'
import logo from './logo.svg'
import { useAuthStore } from './store'
import './App.css'

const App = () => {
  const state = useAuthStore()
  // @ts-ignore
  const { user, increasePopulation } = state
  console.log(user)

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
      </header>
    </div>
  )
}

export default App
