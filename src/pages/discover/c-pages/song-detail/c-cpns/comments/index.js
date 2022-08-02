import React, { memo, useState, useCallback, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotCommentAction } from '../../store/actionCreators'

import Cpagination from '@/components/pagination'

import { getSongComment } from '@/service/songDetail'

import { Button, Avatar, Comment, Form, Input, List } from 'antd'
import { FireFilled } from '@ant-design/icons';

import { CommentsStyle } from './style'

const Comments = memo((props) => {

  const dispatch = useDispatch()
  const { params } = props.match
  const { hotComment } = useSelector(
    state => ({
      hotComment: state.getIn(['songDetail', 'hotComment']),
    }),
    shallowEqual
  )
  // 精彩评论
  useEffect(() => {
    dispatch(getHotCommentAction(params.id))
  }, [dispatch, params.id])
  
  // 最新评论
  const [comments, setComments] = useState([])
  const [commentsTotal, setCommentsTotal] = useState(0)
  useEffect(() => {
    getSongComment(params.id).then((res) => {
      const newComments = res.comments.map(item => {
        return {
          content: item.content,
          ...item.user,
          timeStr: item.timeStr,
          likedCount: item.likedCount,
        }
      })
      setComments(newComments)
      setCommentsTotal(res.total)
    })
  }, [params.id])

  // 最新评论分页
  const [current, setCurrentPage] = useState(1)
  const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      const targePageCount = (currentPage - 1) * 20
      getSongComment(params.id, 20, targePageCount).then((res) => {
        const newComments = res.comments.map(item => {
          return {
            content: item.content,
            ...item.user,
            timeStr: item.timeStr,
            likedCount: item.likedCount,
          }
        })
        setComments(newComments)
        setCommentsTotal(res.total)
      })
    },
    [params.id]
  )

  const handleLike = item => {
    console.log({ item });
  }

  const handleReplay = item => {
    console.log({ item });
  }

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

  return (
    <CommentsStyle>
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
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
        dataSource={comments}
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