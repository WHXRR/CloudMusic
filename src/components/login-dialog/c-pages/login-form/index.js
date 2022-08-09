import React, { memo } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getLoginProfileInfo } from '../../store/actionCreators'

import { Button, Form, Input, Divider } from 'antd';
import { LoginFormStyle } from './style'

import {
  LOGINBYPHONE,
  LOGINBYEMAIL,
  REGISTERACCOUNT
} from '../../index'

const LoginDialog = memo((props) => {

  const { loginType, changeLoginType } = props

  const dispatch = useDispatch()
  const { globalBtnLoading } = useSelector(
    state => ({
      globalBtnLoading: state.getIn(['login', 'globalBtnLoading']),
    }),
    shallowEqual
  )

  const onFinish = ({ username, password }) => {
    dispatch(getLoginProfileInfo(username, password, loginType))
  }

  return (
    <LoginFormStyle>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout='vertical'
      >
        {
          loginType === LOGINBYPHONE ? (
            <Form.Item
              label="手机号"
              name="username"
              rules={[{ required: true, message: '请输入手机号' }]}
              style={{ marginBottom: '10px' }}
            >
              <Input />
            </Form.Item>
          ) : null
        }
        {
          loginType === LOGINBYEMAIL ? (
            <Form.Item
              label="邮箱"
              name="username"
              rules={[
                {
                  type: 'email',
                  message: '请输入正确的邮箱',
                },
                {
                  required: true,
                  message: '请输入邮箱',
                },
              ]}
              style={{ marginBottom: '10px' }}
            >
              <Input />
            </Form.Item>
          ) : null
        }
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
        <Button shape='round' type="primary" htmlType="submit" className='login-btn' loading={globalBtnLoading}>
          登录
        </Button>
        <Button shape='round' htmlType="submit" className='login-btn' onClick={() => changeLoginType(REGISTERACCOUNT)}>立即注册</Button>
      </Form>
      <Divider />
      <div className='other-login'>
        {
          loginType === LOGINBYPHONE ? (
            <svg className="icon" aria-hidden="true" onClick={() => changeLoginType(LOGINBYEMAIL)}>
              <use xlinkHref="#icon-pinpaibiaoshi_wangyiyouxiang"></use>
            </svg>
          ) : (
            <svg className="icon" aria-hidden="true" onClick={() => changeLoginType(LOGINBYPHONE)}>
              <use xlinkHref="#icon-qunfengshouji"></use>
            </svg>
          )
        }
      </div>
    </LoginFormStyle>
  )
})

export default LoginDialog