import React, { memo, useEffect, useState } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerDetailsAction, getTopSingerAction } from '../../store/actionCreators'

import HotSong from '../hot-song'
import Mv from '../mv'
import Album from '../album'
import Desc from '../desc'
import NormalSongStyle from '@/components/normal-song-style'

import { Tabs, List } from 'antd';

import {
  SingerDetailsStyle
} from './style'

import { backTop } from '@/utils/back-top'

const { TabPane } = Tabs;

const HOTSONG = 'hotSong'
const ALLALBUM = 'allAlbum'
const MV = 'mv'
const DESC = 'desc'
const tabs = [
  {
    name: '热门作品',
    key: HOTSONG
  },
  {
    name: '所有专辑',
    key: ALLALBUM
  },
  {
    name: '相关MV',
    key: MV
  },
  {
    name: '艺人介绍',
    key: DESC
  },
]

const SingerDetails = memo((props) => {

  const { params } = props.match

  const { details, topSinger } = useSelector(
    state => ({
      details: state.getIn(['singer', 'details']),
      topSinger: state.getIn(['singer', 'topSinger'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerDetailsAction(params.id))
    dispatch(getTopSingerAction())
  }, [dispatch, params])
  
  useEffect(() => {
    backTop()
  }, [props.match.params.id])

  const [activeKey, setActiveKey] = useState(HOTSONG)
  const handleTabClick = (key) => {
    setActiveKey(key)
  }

  const handleClick = item => {
    props.history.push({
      pathname: `/discover/singerdetails/${item.id}`
    })
  }

  return (
    <SingerDetailsStyle src={details.cover}>
      <div className='singer-img' />
      <div className='card-container'>
        <div className='details-name'>{details.name}</div>
        <Tabs
          activeKey={activeKey}
          onTabClick={handleTabClick}
          centered
          type="card"
        >
          {
            tabs.map(item => (
              <TabPane tab={item.name} key={item.key}>
                {item.key === HOTSONG && <HotSong {...props} />}
                {item.key === ALLALBUM && <Album {...props} />}
                {item.key === MV && <Mv {...props} />}
                {item.key === DESC && <Desc {...props} />}
              </TabPane>
            ))
          }
        </Tabs>
      </div>
      <div className='simi'>
        <List
          className='simi-song'
          header='热门歌手'
          itemLayout="horizontal"
          dataSource={topSinger}
          renderItem={item => (
            <NormalSongStyle
              picUrl={item.picUrl}
              singerName={item.name}
              onClick={() => handleClick(item)}
            />
          )}
        />
      </div>
    </SingerDetailsStyle>
  )
})

export default SingerDetails