import React, { memo, useEffect, useState, useCallback } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongListHotCommentAction, getSongListCommentAction } from '../../store/actionCreators'

import Comment from '@/components/comment'

const SongListComment = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()
  const { hotComments, comments, total } = useSelector(
    state => ({
      hotComments: state.getIn(['songListDetails', 'hotComments']),
      comments: state.getIn(['songListDetails', 'comments']),
      total: state.getIn(['songListDetails', 'total']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getSongListHotCommentAction(params.id))
    dispatch(getSongListCommentAction(params.id))
  }, [dispatch, params.id])

  const handleLike = data => {
    console.log(data);
  }

  const handleReplay = data => {
    console.log({ data });
  }

  const [current, setCurrentPage] = useState(1)
  const changePage = useCallback(
    (currentPage) => {
      setCurrentPage(currentPage)
      const targePageCount = (currentPage - 1) * 20
      dispatch(getSongListCommentAction(params.id, 20, targePageCount))
    },
    [dispatch, params.id]
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
      />
    </>
  )
})

export default SongListComment