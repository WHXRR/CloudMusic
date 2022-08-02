import React, { memo, useState } from 'react'

import { Modal } from 'antd';

import { LoginDialogStyle } from './style'

import LoginForm from './c-pages/login-form'
import RegisterForm from './c-pages/register-form'

import Music from '@/assets/img/音乐.svg'
import Music2 from '@/assets/img/music2.svg'

export const LOGINBYPHONE = 'LOGINBYPHONE'
export const LOGINBYEMAIL = 'LOGINBYEMAIL'
export const REGISTERACCOUNT = 'REGISTERACCOUNT'

const LoginDialog = memo((props) => {

  const { visible, handleOk, handleCancel } = props

  const [loginType, changeLoginType] = useState(LOGINBYPHONE)
  const changeLogin = (type) => {
    changeLoginType(type)
  }

  return (
    <Modal
      visible={visible}
      closable={false}
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
      bodyStyle={{ padding: 0 }}
      width='70%'
    >
      <LoginDialogStyle>
        <div className='left'>
          <img src={Music} alt='音乐' />
        </div>
        <div className='right'>
          <div className='form'>
            <div className='title'>
              <img className='music' src={Music2} alt='音乐' />
              <span>Welcome To Music</span>
            </div>
            {
              loginType === REGISTERACCOUNT ? (
                <RegisterForm loginType={loginType} changeLoginType={changeLogin} />
              ) : (
                <LoginForm loginType={loginType} changeLoginType={changeLogin} />
              )
            }
          </div>
        </div>
      </LoginDialogStyle>
    </Modal>
  )
})

export default LoginDialog