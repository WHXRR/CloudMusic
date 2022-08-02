import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'

import NormalSongStyle from '@/components/normal-song-style';

import {
  HotContent,
} from './style'

const Recommend = memo((props) => {

  const dispatch = useDispatch()
  const { hotRecommend } = useSelector(
    state => ({
      hotRecommend: state.getIn(['recommend', 'hotRecommend']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])


  return (
    <HotContent>
      {
        hotRecommend.map(item => (
          <NormalSongStyle key={item.id} {...item} />
        ))
      }
    </HotContent>
  )
})

export default Recommend