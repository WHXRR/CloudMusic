import React, { memo } from 'react'

import Cpagination from '@/components/pagination'
import SendComment from '../sendComment'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeDialogVisibleAction } from '@/components/login-dialog/store/actionCreators'

import { Comment, List, message } from 'antd'
import { FireOutlined, FireFilled } from '@ant-design/icons';

import {
  CommentsStyle,
  NameStyle,
  SubCommentsStyle,
  ReplayStyle
} from './style'

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
    commentLoading,
  } = props

  const { token } = useSelector(
    state => ({
      token: state.getIn(['login', 'token']),
    }),
    shallowEqual
  )
  const clickReplay = (data, idx, type) => {
    if (!token) {
      message.warning('请先登录！')
      return dispatch(changeDialogVisibleAction(true))
    }
    handleReplay(data, idx, type)
  }
  const clickLike = (data, type) => {
    if (!token) {
      message.warning('请先登录！')
      return dispatch(changeDialogVisibleAction(true))
    }
    handleLike(data, type)
  }

  const author = (item) => {
    return (
      <NameStyle>
        <span>{item.nickname}</span>
        <img
          src={item.avatarDetail?.identityIconUrl}
          style={{ width: '12px' }}
          alt=''
        />
      </NameStyle>
    )
  }

  return (
    <CommentsStyle id='comment'>
      <SendComment
        handleSubmit={handleSubmit}
        commentLoading={commentLoading}
      />
      <List
        className="comment-list"
        header='精彩评论'
        itemLayout="horizontal"
        dataSource={hotComment}
        renderItem={(item, idx) => (
          <li>
            <Comment
              actions={
                [
                  <div className='flex'>
                    <span className='pointer' onClick={() => clickReplay(item, idx, 'hot')}>回复</span>
                    <div onClick={() => clickLike(item, 'hot')} className='pointer'>
                      {
                        item.liked ? (
                          <FireFilled className='icon' />
                        ) : (
                          <FireOutlined className='icon' />
                        )
                      }
                      （{item.likedCount}）
                    </div>
                  </div>
                ]
              }
              author={author(item)}
              avatar={item.avatarUrl}
              content={item.content}
              datetime={item.timeStr}
            >
              {
                item.beReplied.length && item.beReplied[0].user && (
                  <SubCommentsStyle>
                    <Comment
                      author={author(item.beReplied[0].user)}
                      avatar={item.beReplied[0].user.avatarUrl}
                      content={item.beReplied[0].content}
                    />
                  </SubCommentsStyle>
                )
              }
            </Comment>
            {
              item.isReplay && (
                <ReplayStyle>
                  <SendComment
                    replayTo={item}
                    rows={2}
                    handleSubmit={handleSubmit}
                    commentLoading={commentLoading}
                    size='small'
                  />
                </ReplayStyle>
              )
            }
          </li>
        )}
      />
      <List
        className="comment-list"
        header='最新评论'
        itemLayout="horizontal"
        dataSource={newComment}
        renderItem={(item, idx) => (
          <li>
            <Comment
              actions={
                [
                  <div className='flex'>
                    <span className='pointer' onClick={() => clickReplay(item, idx, 'new')}>回复</span>
                    <div onClick={() => clickLike(item, 'new')} className='pointer'>
                      {
                        item.liked ? (
                          <FireFilled className='icon' />
                        ) : (
                          <FireOutlined className='icon' />
                        )
                      }
                      （{item.likedCount}）
                    </div>
                  </div>
                ]
              }
              author={author(item)}
              avatar={item.avatarUrl}
              content={item.content}
              datetime={item.timeStr}
            >
              {
                item.beReplied.length && item.beReplied[0].user && (
                  <SubCommentsStyle>
                    <Comment
                      author={author(item.beReplied[0].user)}
                      avatar={item.beReplied[0].user.avatarUrl}
                      content={item.beReplied[0].content}
                    />
                  </SubCommentsStyle>
                )
              }
            </Comment>
            {
              item.isReplay && (
                <ReplayStyle>
                  <SendComment
                    replayTo={item}
                    rows={2}
                    handleSubmit={handleSubmit}
                    commentLoading={commentLoading}
                    size='small'
                  />
                </ReplayStyle>
              )
            }
          </li>
        )}
      />
      <Cpagination
        current={current}
        total={commentsTotal}
        handleChange={(e) => changePage(e)}
      />
    </CommentsStyle>
  )
})

export default Comments