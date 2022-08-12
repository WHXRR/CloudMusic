import React, { memo, useState } from 'react'

import Cpagination from '@/components/pagination'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeDialogVisibleAction } from '@/components/login-dialog/store/actionCreators'

import { Button, Avatar, Comment, Form, Input, List, message } from 'antd'
import { FireFilled } from '@ant-design/icons';

import { CommentsStyle } from './style'

const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea placeholder='说点什么...' rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        评论
      </Button>
    </Form.Item>
  </>
);

const Comments = memo((props) => {
  const dispatch = useDispatch()

  const {
    hotComment,
    newComment,
    current,
    commentsTotal,
    changePage,
    handleLike,
    handleReplay,
    handleSubmit,
    commentLoading
  } = props

  const { token, profile } = useSelector(
    state => ({
      token: state.getIn(['login', 'token']),
      profile: state.getIn(['login', 'profile']),
    }),
    shallowEqual
  )
  const clickReplay = data => {
    if (!token) {
      message.warning('请先登录！')
      return dispatch(changeDialogVisibleAction(true))
    }
    handleReplay(data)
  }
  const clickLike = (data, type) => {
    if (!token) {
      message.warning('请先登录！')
      return dispatch(changeDialogVisibleAction(true))
    }
    handleLike(data, type)
  }

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
    handleSubmit(value)
  }

  return (
    <CommentsStyle id='comment'>
      <Comment
        avatar={
          <Avatar
            src={profile.avatarUrl || "https://joeschmoe.io/api/v1/random"}
            alt={profile.nickname}
          />}
        content={
          <Editor
            onSubmit={onSubmit}
            value={value}
            onChange={onChange}
            submitting={commentLoading}
          />
        }
      />
      <List
        className="comment-list"
        header='精彩评论'
        itemLayout="horizontal"
        dataSource={hotComment}
        renderItem={item => (
          <li>
            <Comment
              actions={
                [
                  <div className='flex'>
                    <span className='pointer' onClick={() => clickReplay(item)}>回复</span>
                    <div onClick={() => clickLike(item, 'hot')} className={'pointer ' + (item.liked ? 'like' : '')}>
                      <FireFilled />
                      （{item.likedCount}）
                    </div>
                  </div>
                ]
              }
              author={item.nickname}
              avatar={item.avatarUrl}
              content={item.content}
              datetime={item.timeStr}
            />
          </li>
        )}
      />
      <List
        className="comment-list"
        header='最新评论'
        itemLayout="horizontal"
        dataSource={newComment}
        renderItem={item => (
          <li>
            <Comment
              actions={
                [
                  <div className='flex'>
                    <span className='pointer' onClick={() => clickReplay(item)}>回复</span>
                    <div onClick={() => clickLike(item, 'new')} className={'pointer ' + (item.liked ? 'like' : '')}>
                      <FireFilled className='pointer' />
                      （{item.likedCount}）
                    </div>
                  </div>
                ]
              }
              author={item.nickname}
              avatar={item.avatarUrl}
              content={item.content}
              datetime={item.timeStr}
            />
          </li>
        )}
      />
      <Cpagination current={current} total={commentsTotal} handleChange={(e) => changePage(e)} />
    </CommentsStyle>
  )
})

export default Comments