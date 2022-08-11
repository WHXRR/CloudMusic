import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerHotSongAction } from '../../store/actionCreators'

import { Table } from 'antd';

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
      title: '#',
      width: 50,
      align: 'center',
      dataIndex: 'index',
      key: 'index',
      render: (text) => <strong style={{ color: '#b3b3b3' }}>{text}</strong>,
    },
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
      <Table
        columns={columns}
        dataSource={hotList}
        pagination={false}
        size='small'
        rowKey="id"
        className='song-list-table'
      />
    </div>
  )
})

export default HotSong