import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSimiSongListAction } from '../../store/actionCreators'

import NormalSongStyle from '@/components/normal-song-style';

import { List } from 'antd'
import { SimiSongStyle } from './style'

const SimiSongList = memo((props) => {

  const { params } = props.match
  const dispatch = useDispatch()
  const { simiList } = useSelector(
    state => ({
      simiList: state.getIn(['songListDetails', 'simiList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getSimiSongListAction(params.id))
  }, [dispatch, params.id])

  const handleClick = item => {
    props.history.push(`/discover/songlistdetails/${item.id}`)
  }

  return (
    <SimiSongStyle>
      <List
        className='simi-song'
        header='相似歌单'
        itemLayout="horizontal"
        dataSource={simiList}
        renderItem={item => (
          <NormalSongStyle
            picUrl={item.coverImgUrl}
            name={item.name}
            singerName={item.creator?.nickname}
            onClick={() => handleClick(item)}
          />
        )}
      />
    </SimiSongStyle>
  )
})

export default SimiSongList