import React, { memo, useState } from 'react'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeDialogVisibleAction } from '@/components/login-dialog/store/actionCreators'

import { Button, Avatar, Comment, Form, Input, message } from 'antd'

const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value, rows = 4, size = 'default' }) => (
  <>
    <Form.Item>
      <TextArea placeholder='说点什么...' rows={rows} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item style={{ margin: 0 }}>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary" size={size}>
        评论
      </Button>
    </Form.Item>
  </>
);

const SendComment = memo((props) => {
  const {
    handleSubmit,
    commentLoading,
    size,
    rows,
    replayTo
  } = props

  const dispatch = useDispatch()
  const { token, profile } = useSelector(
    state => ({
      token: state.getIn(['login', 'token']),
      profile: state.getIn(['login', 'profile']),
    }),
    shallowEqual
  )

  const [value, changeValue] = useState('')
  const onChange = (e) => {
    changeValue(e.target.value)
  }
  const onSubmit = () => {
    if (!token) {
      message.warning('请先登录！')
      return dispatch(changeDialogVisibleAction(true))
    }
    if (!value) return
    handleSubmit(value, replayTo)
  }

  return (
    <div>
      <Comment
        avatar={
          <Avatar
            src={profile.avatarUrl || "https://joeschmoe.io/api/v1/random"}
            alt={profile.nickname}
          />}
        content={
          <Editor
            rows={rows}
            size={size}
            onSubmit={onSubmit}
            value={value}
            onChange={onChange}
            submitting={commentLoading}
          />
        }
      />
    </div>
  )
})

export default SendComment