import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import { useAuthStore } from '../store'
import logo from '../logo.svg'

const MasterData = React.lazy(() => import('./MasterData'))

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
      <Route
        path="/menu/*"
        element={
          <Suspense fallback={<Spin />}>
            <MasterData />
          </Suspense>
        }
      />
      <Route path="/users/*" element={<div>Users</div>} />
    </Routes>
  )
}

export default AppRoutes
