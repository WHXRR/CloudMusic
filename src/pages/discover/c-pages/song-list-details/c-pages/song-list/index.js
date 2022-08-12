import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getSongListDetailsAction } from '../../store/actionCreators'

import DetailsBtns from '@/components/detailsBtns'
import SongTable from '@/components/songTable'

import { Tag } from 'antd'

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

  const toLink = (data) => {
    props.history.push({
      pathname: `/discover/albumdetails/${data.al.id}`,
      state: {
        singerId: data.singer[0].id
      }
    })
  }
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
      title: '歌手',
      align: 'center',
      dataIndex: 'singer',
      key: 'singer',
      render: (_, data) => (
        <>
          {
            data.singer?.map((item, idx) => (
              <Tag
                color={tagsColor[`color${idx + 1}`]}
                key={idx}
                style={{ margin: '2px' }}
              >
                <NavLink to={`/discover/singerdetails/${item.id}`}>{item.name}</NavLink>
              </Tag>
            ))
          }
        </>
      ),
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
      {
        detail?.tracks && <DetailsBtns
          songId={detail?.tracks[0]?.id}
          commentCount={detail.commentCount}
        />
      }
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
      <SongTable
        dataSource={detail?.tracks}
        columns={columns}
        scroll={{ y: 300 }}
        className='song-list-table'
      />
    </SongListDetailStyle>
  )
})

export default SongList