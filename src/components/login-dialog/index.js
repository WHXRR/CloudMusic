import React, { memo } from 'react'

import { Modal } from 'antd';

const LoginDialog = memo((props) => {

  const { visible } = props

  const handleOk = () => { }
  const handleCancel = () => { }

  return (
    <Modal title="登录" visible={visible} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
    </Modal>
  )
})

export default LoginDialog