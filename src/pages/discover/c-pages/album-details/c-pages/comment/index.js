import React, { memo, useEffect, useState, useCallback } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAlbumHotCommentAction, getAlbumCommentAction } from '../../store/actionCreators'

import Comment from '@/components/comment'

const SongListComment = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()
  const { hotComments, comments, total } = useSelector(
    state => ({
      hotComments: state.getIn(['albumDetails', 'hotComments']),
      comments: state.getIn(['albumDetails', 'comments']),
      total: state.getIn(['albumDetails', 'total']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getAlbumHotCommentAction(params.id))
    dispatch(getAlbumCommentAction(params.id))
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
      dispatch(getAlbumCommentAction(params.id, 20, targePageCount))
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