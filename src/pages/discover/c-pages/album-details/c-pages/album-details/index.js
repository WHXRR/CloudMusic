import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAlbumDetailsAction } from '../../store/actionCreators'


import { Button, Table, Tag } from 'antd'
import { PlayCircleOutlined, StarOutlined, DownloadOutlined, PaperClipOutlined, CommentOutlined } from '@ant-design/icons';

import { SongListDetailStyle } from './style'

import { formatMinuteSecond } from '@/utils/format-utils.js'
import { NavLink } from 'react-router-dom';

const tagsColor = {
  color1: 'magenta',
  color2: 'purple',
  color3: 'volcano',
  color4: 'orange',
  color5: 'geekblue',
  color6: 'green',
  color7: 'cyan',
  color8: 'blue',
  color9: 'lime',
}

const SongList = memo((props) => {
  const dispatch = useDispatch()
  const { params } = props.match

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
      title: '歌手',
      align: 'center',
      dataIndex: 'singer_name',
      key: 'singer_name',
      render: (text) => (
        <>
          {
            text?.map((item, idx) => (
              <Tag color={tagsColor[`color${idx + 1}`]} key={idx} style={{ margin: '2px' }}>{item}</Tag>
            ))
          }
        </>
      ),
    }
  ]

  const { detail: { album, songs }, total } = useSelector(
    state => ({
      detail: state.getIn(['albumDetails', 'details']),
      total: state.getIn(['albumDetails', 'total']),
    }),
    shallowEqual
  )

  const createTime = new Date(album?.publishTime)

  useEffect(() => {
    dispatch(getAlbumDetailsAction(params.id))
  }, [dispatch, params.id])

  return (
    <SongListDetailStyle>
      <img className='song-img' src={album?.picUrl} alt={album?.name} />
      <div className='song-name'>{album?.name}</div>
      <div className='other-info text-center'>
        <span>歌手：{album?.artists.map((item, idx) => <Tag key={item.id} color={tagsColor[`color${idx + 1}`]}>{item.name}</Tag>)}</span>
        <div className='grey'>发行时间：{`${createTime.getFullYear()}-${+createTime.getMonth() + 1}-${createTime.getDate()}`}</div>
      </div>
      <div className='btns'>
        <Button type="primary" shape="round" ghost icon={<PlayCircleOutlined />}>播放</Button>
        <Button type="primary" shape="round" ghost icon={<StarOutlined />}>收藏</Button>
        <Button type="primary" shape="round" ghost icon={<PaperClipOutlined />}>分享</Button>
        <Button type="primary" shape="round" ghost icon={<DownloadOutlined />}>下载</Button>
        <Button type="primary" shape="round" ghost icon={<CommentOutlined />}>评论({total})</Button>
      </div>

      <div className='grey description' style={{whiteSpace: 'pre-line'}}>
        <div className='text-bold'>专辑介绍</div>
        <div dangerouslySetInnerHTML={{ __html: album?.description }}></div>
      </div>
      <div className='table-top'>
        <div className='flex'>
          <div className='title'>歌曲列表</div>
          <div>{songs?.length}首歌</div>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={songs}
        pagination={false}
        size='small'
        scroll={{ y: 300 }}
        rowKey="id"
        className='song-list-table'
      />
    </SongListDetailStyle>
  )
})

export default SongList