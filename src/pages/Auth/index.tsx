import React, { useEffect } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Col, Form, Radio, Row } from 'antd'
import styled from 'styled-components'
import FormInput from '../../components/form/FormInput'
import { useAuthStore, UserRoles } from '../../store'

type Inputs = {
  username: string
  password: string
  role: UserRoles
}

const Auth: React.FC = () => {
  const { login, user, loading } = useAuthStore()
  const navigate = useNavigate()
  const formMethods = useForm<Inputs>()
  const { control, handleSubmit, watch } = formMethods

  useEffect(() => {
    if (user) navigate('/', { replace: true })
  }, [user, navigate])

  const handleLogin = handleSubmit(data => {
    if (!data.role) return

    login({ username: 'John Doe', role: data.role })
  })
  const role = watch('role')

  return (
    <Wrapper>
      <FormProvider {...formMethods}>
        <Row gutter={24}>
          <Col xs={{ span: 24 }} md={{ span: 20 }}>
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <FormInput
                label="Username"
                name="username"
                rules={{ required: true }}
              />
              <FormInput
                inputProps={{ type: 'password' }}
                label="Password"
                name="password"
                rules={{ required: true }}
              />
              <Form.Item label="Role" required>
                <Controller
                  control={control}
                  name="role"
                  rules={{ required: true }}
                  render={({ field: { value, onChange, onBlur } }) => (
                    <Radio.Group {...{ value, onChange, onBlur }}>
                      <Radio value={UserRoles.ADMIN}>Admin</Radio>
                      <Radio value={UserRoles.USER}>User</Radio>
                    </Radio.Group>
                  )}
                />
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
      </FormProvider>
    </Wrapper>
  )
}

export default Auth

const Wrapper = styled.div.attrs(() => ({
  className: 'h-screen w-screen flex items-center justify-center',
}))``
