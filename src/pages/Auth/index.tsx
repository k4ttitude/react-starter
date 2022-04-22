import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import styled from 'styled-components'
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
    <Wrapper>
      <Button type="primary" onClick={login} loading={loading}>
        Login
      </Button>
    </Wrapper>
  )
}

export default Auth

const Wrapper = styled.div.attrs(() => ({
  className: 'h-screen w-screen flex items-center justify-center',
}))``
