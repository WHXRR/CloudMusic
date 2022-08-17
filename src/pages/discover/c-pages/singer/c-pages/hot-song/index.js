import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerHotSongAction } from '../../store/actionCreators'

import SongTable from '@/components/song-table'

import { formatMinuteSecond } from '@/utils/format-utils.js'

import { NavLink } from 'react-router-dom';

const HotSong = memo((props) => {

  const { params } = props.match

  const { hotList } = useSelector(
    state => ({
      hotList: state.getIn(['singer', 'hotList'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerHotSongAction(params.id))
  }, [dispatch, params])

  const columns = [
    {
      title: '歌曲标题',
      width: 240,
      dataIndex: 'name',
      key: 'name',
      render: (_, data) => <NavLink to={`/discover/songdetail/${data.id}`}>{data.name}</NavLink>,
    },
    {
      title: '时长',
      width: 100,
      align: 'center',
      dataIndex: 'dt',
      key: 'dt',
      render: (text) => <div>{formatMinuteSecond(text)}</div>,
    },
    {
      title: '所属专辑',
      width: 200,
      align: 'center',
      dataIndex: 'al',
      key: 'al',
      render: (_, data) => <a href='javascript;:' onClick={(e) => { e.preventDefault(); toLink(data) }}>{data.al.name}</a>,
    },
  ]

  const toLink = (data) => {
    props.history.push({
      pathname: `/discover/albumdetails/${data.al.id}`,
      state: {
        singerId: data.ar[0].id
      }
    })
  }

  return (
    <div>
      <SongTable
        dataSource={hotList}
        columns={columns}
      />
    </div>
  )
})

export default HotSong