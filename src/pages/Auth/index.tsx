import React from 'react'
import { Button } from 'antd'
import { useAuthStore } from '../../store'

const Auth: React.FC = () => {
  const { bears } = useAuthStore()

  const handleLogin = () => {}

  return (
    <div className="h-screen w-screen">
      <Button type="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  )
}

export default Auth
