import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { useAuthStore } from '../../store'

const Auth: React.FC = () => {
  const { login, isLoggedIn, loading } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Button type="primary" onClick={login} loading={loading}>
        Login
      </Button>
    </div>
  )
}

export default Auth
