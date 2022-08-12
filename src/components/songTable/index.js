import React, { memo } from 'react'

import { useDispatch } from 'react-redux'
import { changeShowFlagAction, getCurrentSongAction } from '@/components/player/store/actionCreators'

import { Table } from 'antd'
import {
  PlayCircleFilled,
  DownloadOutlined
} from '@ant-design/icons'

import {
  SongTableStyle,
  SongTableHover
} from './style'

import { getPlayUrl } from '@/utils/format-utils.js'

const SongTable = memo((props) => {
  const dispatch = useDispatch()

  const columns = [
    {
      title: '#',
      width: 70,
      align: 'center',
      dataIndex: 'index',
      key: 'index',
      render: (_, data) => (
        <SongTableHover>
          <strong className='text'>{data.index}</strong>
          <div className='icon'>
            <PlayCircleFilled onClick={() => handlePlay(data)} />
            <DownloadOutlined onClick={() => window.open(getPlayUrl(data.id))} />
          </div>
        </SongTableHover>
      )
    },
    ...props.columns
  ]

  const handlePlay = data => {
    dispatch(changeShowFlagAction(true))
    dispatch(getCurrentSongAction(data.id))
  }

  return (
    <SongTableStyle className={props.className}>
      <Table
        {...props}
        className=''
        rowClassName='row'
        columns={columns}
        dataSource={props.dataSource}
        pagination={false}
        size='small'
        rowKey="id"
      />
    </SongTableStyle>
  )
})

export default SongTable