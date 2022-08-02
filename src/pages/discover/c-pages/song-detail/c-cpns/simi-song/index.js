import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSimiSongAction } from '../../store/actionCreators'

import NormalSongStyle from '@/components/normal-song-style';

import { List } from 'antd'
import { SimiSongStyle } from './style'

const SimiSong = memo((props) => {

  const dispatch = useDispatch()
  const { params } = props.match
  const { simiSong } = useSelector(
    state => ({
      simiSong: state.getIn(['songDetail', 'simiSong']),
    }),
    shallowEqual
  )
  // 相似歌曲
  useEffect(() => {
    dispatch(getSimiSongAction(params.id))
  }, [dispatch, params.id])

  const handleClick = item => {
    props.history.push(`/discover/songdetail/${item.id}`)
  }

  return (
    <SimiSongStyle>
      <List
        className='simi-song'
        header='相似歌曲'
        itemLayout="horizontal"
        dataSource={simiSong}
        renderItem={item => (
          <NormalSongStyle
            picUrl={item.album?.picUrl}
            name={item.name}
            singerName={item.artists[0]?.name}
            onClick={() => handleClick(item)}
          />
        )}
      />
    </SimiSongStyle>
  )
})

export default SimiSong