import React, { memo } from 'react'

import Cpagination from '@/components/pagination'


import { Button, Avatar, Comment, Form, Input, List } from 'antd'
import { FireFilled } from '@ant-design/icons';

import { CommentsStyle } from './style'

const Comments = memo((props) => {

  const { hotComment, newComment, current, commentsTotal, changePage, handleLike, handleReplay } = props

  const { TextArea } = Input;
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <>
      <Form.Item>
        <TextArea placeholder='说点什么...' rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="link">
          评论
        </Button>
      </Form.Item>
    </>
  );

  return (
    <CommentsStyle>
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="" />}
        content={
          <Editor />
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
                    <span className='pointer' onClick={() => handleReplay(item)}>回复</span>
                    <div onClick={() => handleLike(item)} className='pointer like'>
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
                    <span onClick={() => handleReplay(item)}>回复</span>
                    <div onClick={() => handleLike(item)}>
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