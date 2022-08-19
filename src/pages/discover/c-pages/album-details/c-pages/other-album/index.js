import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getOtherAlbumAction } from '../../store/actionCreators'

import NormalSongStyle from '@/components/normal-song-style';

import { List } from 'antd'
import { SimiSongStyle } from './style'

const SimiSongList = memo((props) => {
  
  const dispatch = useDispatch()
  const { otherAlbum, details } = useSelector(
    state => ({
      details: state.getIn(['albumDetails', 'details']),
      otherAlbum: state.getIn(['albumDetails', 'otherAlbum']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getOtherAlbumAction(details.album?.artist?.id))
  }, [dispatch, details])

  const handleClick = item => {
    props.history.push({
      pathname: `/discover/albumdetails/${item.id}`,
    })
  }

  return (
    <SimiSongStyle>
      <List
        className='simi-song'
        header='Ta的其他热门专辑'
        itemLayout="horizontal"
        dataSource={otherAlbum}
        renderItem={item => (
          <NormalSongStyle
            picUrl={item.picUrl}
            name={item.name}
            singerName={item.artists.map(ele => ele.name).join('、')}
            onClick={() => handleClick(item)}
          />
        )}
      />
    </SimiSongStyle>
  )
})

export default SimiSongList