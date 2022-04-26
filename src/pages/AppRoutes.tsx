import { Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../store'
import Pokemons from './Pokemons'
import logo from '../logo.svg'

const AppRoutes = () => {
  const { user } = useAuthStore()

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <img src={logo} className="App-logo" alt="logo" />
            <p className="text-cyan-500">
              Signed in as <b>{user!.username}</b>
            </p>
          </>
        }
      />
      <Route path="pokemons/*" element={<Pokemons />} />
      <Route path="users/*" element={<div>Users</div>} />
    </Routes>
  )
}

export default AppRoutes
