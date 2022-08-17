import React, { memo, useEffect, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getTopListAction, getCurrentTopListAction, getTopListDetailsAction } from './store/actionCreators'

import DetailContent from '@/components/detail-content'
import TopListComment from './c-pages/comment'
import DetailsBtns from '@/components/details-btns'
import SongTable from '@/components/song-table'

import { Drawer, Tag } from 'antd'
import {
  TopListStyle,
  TopListItem
} from './style'

import { NavLink } from 'react-router-dom';

import { formatMinuteSecond } from '@/utils/format-utils.js'
import { backTop } from '@/utils/back-top'

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
    dataIndex: 'singer_name',
    key: 'singer_name',
    render: (_, text) => (
      <>
        {
          text?.ar?.map((item, idx) => (
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
  }
]

const RankingList = memo((props) => {

  const { params } = props.match

  const dispatch = useDispatch()
  const { list, currentList } = useSelector(
    state => ({
      list: state.getIn(['topList', 'list']),
      currentList: state.getIn(['topList', 'currentList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    backTop()
  }, [currentList])

  useEffect(() => {
    if (+params.id) {
      dispatch(getTopListDetailsAction(params.id))
    } else {
      dispatch(getTopListAction())
    }
  }, [dispatch, params])

  const [visible, setVisible] = useState(false)
  const onClose = () => {
    setVisible(false);
  }

  const handleClick = data => {
    setVisible(false);
    dispatch(getCurrentTopListAction(data.id))
  }

  return (
    <TopListStyle>
      <div className='line'></div>
      <div
        className='all-list-btn'
        onClick={() => setVisible(true)}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-paihangbang"></use>
        </svg>
        <div>点我查看全部榜单噢~</div>
      </div>
      <Drawer
        placement='top'
        closable={false}
        bodyStyle={{ padding: '10px' }}
        onClose={onClose}
        visible={visible}
      >
        <TopListItem className='top-list-item'>
          {
            list.map(item => (
              <div className='item' key={item.id} onClick={() => handleClick(item)}>
                <img src={item.coverImgUrl} alt={item.name} />
                <div className='item-title'>{item.name}</div>
                <div className='item-tips'>{item.updateFrequency}</div>
              </div>
            ))
          }
        </TopListItem>
      </Drawer>
      <DetailContent name='songInfo'>
        <img className='song-img' src={currentList?.coverImgUrl} alt={currentList?.name} />
        <div className='song-name'>{currentList?.name}</div>
        <div className='other-info text-center'>
          <div className='grey'>{currentList.description}</div>
        </div>
        {
          currentList.tracks && <DetailsBtns
            songId={currentList.tracks[0]?.id}
            commentCount={currentList.commentCount}
          />
        }
        <div className='table-top'>
          <div className='flex'>
            <div className='title'>歌曲列表</div>
            <div>{currentList.tracks?.length}首歌</div>
          </div>
          <div className='flex'>
            <div>播放：<span className='red'>{currentList.playCount}</span> 次</div>
          </div>
        </div>
        <SongTable
          dataSource={currentList.tracks}
          columns={columns}
          scroll={{ y: 300 }}
          className='song-list-table'
        />
      </DetailContent>
      <DetailContent name='commentInfo'>
        <TopListComment {...props} />
      </DetailContent>
    </TopListStyle>
  )
})

export default RankingList