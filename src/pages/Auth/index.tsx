import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, Input, Radio, Row } from 'antd'
import styled from 'styled-components'
import { useAuthStore, UserRoles } from '../../store'

const Auth: React.FC = () => {
  const { login, user, loading } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/')
  }, [user, navigate])

  const handleLogin = () => {
    if (!role) return
    login({ id: 1, name: 'John Doe', role })
  }

  const [role, setRole] = useState<UserRoles>()

  return (
    <Wrapper>
      <Row gutter={24}>
        <Col xs={{ span: 24 }} md={{ span: 20 }}>
          <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
            <Form.Item label="Username">
              <Input />
            </Form.Item>
            <Form.Item label="Password">
              <Input type="password" />
            </Form.Item>
            <Form.Item label="Role" required>
              <Radio.Group value={role} onChange={e => setRole(e.target.value)}>
                <Radio value={UserRoles.ADMIN}>Admin</Radio>
                <Radio value={UserRoles.USER}>User</Radio>
              </Radio.Group>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 4 }}>
          <Button
            type="primary"
            onClick={handleLogin}
            loading={loading}
            disabled={!role}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Wrapper>
  )
}

export default Auth

const Wrapper = styled.div.attrs(() => ({
  className: 'h-screen w-screen flex items-center justify-center',
}))``
