import React, { memo } from 'react'

import { Button, Form, Input } from 'antd';

import {
  LOGINBYPHONE,
} from '../../index'

const RegisterForm = memo((props) => {

  const { changeLoginType } = props

  const onFinish = () => {

  }
  const onFinishFailed = () => {

  }

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout='vertical'
    >
      <Form.Item
        label="手机号"
        name="username"
        rules={[{ required: true, message: '请输入手机号', type: 'number' }]}
        style={{ marginBottom: '10px' }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="密码"
        name="password"
        rules={[
          {
            min: 6,
            message: '密码不能小于6位数',
          },
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Button shape='round' type="primary" htmlType="submit" className='login-btn'>
        下一步
      </Button>
      <Button shape='round' htmlType="submit" className='login-btn' onClick={() => changeLoginType(LOGINBYPHONE)}>返回登录</Button>
    </Form>
  )
})

export default RegisterForm