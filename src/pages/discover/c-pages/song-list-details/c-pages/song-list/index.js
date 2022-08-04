import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongListDetailsAction } from '../../store/actionCreators'


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
              <Tag color={tagsColor[`color${idx + 1}`]} key={idx} style={{margin: '2px'}}>{item}</Tag>
            ))
          }
        </>
      ),
    },
    {
      title: '所属专辑',
      width: 200,
      align: 'center',
      dataIndex: 'al_name',
      key: 'al_name',
      render: (_, data) => <div>{data.al_name}</div>,
    },
  ]

  const { detail } = useSelector(
    state => ({
      detail: state.getIn(['songListDetails', 'songListDetails']),
    }),
    shallowEqual
  )

  const createTime = new Date(detail.createTime)

  useEffect(() => {
    dispatch(getSongListDetailsAction(params.id))
  }, [dispatch, params.id])

  return (
    <SongListDetailStyle>
      <img className='song-img' src={detail.coverImgUrl} alt={detail.name} />
      <div className='song-name'>{detail.name}</div>
      <div className='other-info text-center'>
        <span className='link'>{detail.creator?.nickname}</span>
        <div className='grey'>{`${createTime.getFullYear()}-${+createTime.getMonth() + 1}-${createTime.getDate()}`} 创建</div>
      </div>
      <div className='btns'>
        <Button type="primary" shape="round" ghost icon={<PlayCircleOutlined />}>播放</Button>
        <Button type="primary" shape="round" ghost icon={<StarOutlined />}>收藏</Button>
        <Button type="primary" shape="round" ghost icon={<PaperClipOutlined />}>分享</Button>
        <Button type="primary" shape="round" ghost icon={<DownloadOutlined />}>下载</Button>
        <Button type="primary" shape="round" ghost icon={<CommentOutlined />}>评论({detail.commentCount})</Button>
      </div>
      <div className='text-left'>
        <span className='grey'>标签：
          {
            detail.tags?.map((item, idx) => (
              <Tag key={idx} color={tagsColor[`color${idx + 1}`]}>{item}</Tag>
            ))
          }
        </span>
      </div>
      <div className='grey description'>
        介绍：{detail.description}
      </div>
      <div className='table-top'>
        <div className='flex'>
          <div className='title'>歌曲列表</div>
          <div>{detail.tracks?.length}首歌</div>
        </div>
        <div>播放：<strong className='red'>{detail?.playCount}</strong>次</div>
      </div>
      <Table
        columns={columns}
        dataSource={detail?.tracks}
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