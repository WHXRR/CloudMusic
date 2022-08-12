import React, { memo, useState, useCallback, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotCommentAction, getCommentAction, changeHotCommentAction, changeCommentAction } from '../../store/actionCreators'

import Comment from '@/components/comment'

import { message } from 'antd'

import { commentLike, handleComment } from '@/service/songDetail'

const Comments = memo((props) => {

  const dispatch = useDispatch()
  const { params } = props.match
  const { hotComments, comments, total } = useSelector(
    state => ({
      hotComments: state.getIn(['songDetail', 'hotComments']),
      comments: state.getIn(['songDetail', 'comments']),
      total: state.getIn(['songDetail', 'total']),
    }),
    shallowEqual
  )
  // 精彩评论
  useEffect(() => {
    dispatch(getHotCommentAction(params.id))
    dispatch(getCommentAction(params.id))
  }, [dispatch, params.id])

  const [current, setCurrentPage] = useState(1)
  const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      const targePageCount = (currentPage - 1) * 20
      dispatch(getCommentAction(params.id, 20, targePageCount))
    },
    [dispatch, params.id]
  )

  const handleLike = useCallback(
    (item, type) => {
      commentLike(params.id, item.commentId, +!item.liked).then(() => {
        let newComments = []
        if (type === 'hot') {
          newComments = [...hotComments]
        } else {
          newComments = [...comments]
        }
        !item.liked ? newComments[item.index].likedCount += 1 : newComments[item.index].likedCount -= 1
        newComments[item.index].liked = !item.liked
        type === 'hot' ? dispatch(changeHotCommentAction(newComments)) : dispatch(changeCommentAction(newComments))
      })
    },
    [params.id, dispatch, hotComments, comments]
  )

  const handleReplay = (item, idx, type) => {
    if (type === 'hot') {
      const newArr = [...hotComments]
      newArr.forEach((item, index) => {
        if (index === idx) return
        item.isReplay = false
      })
      newArr[idx].isReplay = !item.isReplay
      dispatch(changeHotCommentAction(newArr))
    } else {
      const newArr = [...comments]
      newArr.forEach((item, index) => {
        if (index === idx) return
        item.isReplay = false
      })
      newArr[idx].isReplay = !item.isReplay
      dispatch(changeCommentAction(newArr))
    }
  }

  const [commentLoading, changeLoading] = useState(false)
  const handleSubmit = useCallback(
    (content, replayTo) => {
      changeLoading(true)
      handleComment(params.id, content, replayTo ? 2 : 1, 0, replayTo ? replayTo.commentId : null).then(res => {
        if (res.code === 200) {
          message.success('评论成功').then(() => {
            dispatch(getCommentAction(params.id))
          })
        } else {
          message.error(res.msg)
        }
        changeLoading(false)
      })
    },
    [params.id, dispatch]
  )

  return (
    <>
      <Comment
        hotComment={hotComments}
        newComment={comments}
        handleLike={handleLike}
        handleReplay={handleReplay}
        changePage={changePage}
        current={current}
        commentsTotal={total}
        handleSubmit={handleSubmit}
        commentLoading={commentLoading}
      />
    </>
  )
})

export default Comments