import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewDiscAction } from '../../store/actionCreators'

import SwiperSongStyle from '@/components/swiper-song-style';

const NewDisc = memo((props) => {

  const dispatch = useDispatch()
  const { newDisc } = useSelector(
    state => ({
      newDisc: state.getIn(['recommend', 'newDisc']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getNewDiscAction())
  }, [dispatch])

  const handleClick = (data) => {
    props.history.push(`/discover/albumdetails/${data.id}`)
  }

  return (
    <SwiperSongStyle data={newDisc} onClick={handleClick} />
  )
})

export default NewDisc