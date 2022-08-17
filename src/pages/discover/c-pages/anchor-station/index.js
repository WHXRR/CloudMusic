import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  getDJCateAction,
  getDJRecommendAction,
  getDJHotAction,
  getDJTopListAction,
  getDJHotTopListAction
} from './store/actionCreators'

import { Col, Divider, Row } from 'antd'

import { DJStyle, DJCateItem } from './style'

import NormalSongStyle from '@/components/normal-song-style'
import FlexSongStyle from '@/components/flex-song-style'

const AnchorStation = memo((props) => {
  const dispatch = useDispatch()

  const { cateList, hotList, djList } = useSelector(
    state => ({
      cateList: state.getIn(['dj', 'cateList']),
      hotList: state.getIn(['dj', 'hotList']),
      djList: state.getIn(['dj', 'djList']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getDJCateAction())
    dispatch(getDJHotAction())
    dispatch(getDJHotTopListAction())
  }, [dispatch])

  const [currentCate, setCurrentCate] = useState('')
  const handleCateClick = data => {
    setCurrentCate(data.id)
    dispatch(getDJRecommendAction(data.id))
    dispatch(getDJTopListAction(data.id))
  }

  return (
    <DJStyle>
      <div className='cate-list'>
        {
          cateList.map(item => (
            <DJCateItem
              key={item.id}
              bg={item.picWebUrl}
              onClick={() => handleCateClick(item)}
              className={currentCate === item.id ? 'selected' : ''}
            >
              <div className='cate-img' />
              <div>{item.name}</div>
            </DJCateItem>
          ))
        }
      </div>
      <div className='content'>
        <div className='title'>热门电台</div>
        <Divider />
        <div className='hot'>
          <Row gutter={[20, 40]}>
            {
              hotList?.map(item => (
                <Col key={item.id} xs={12} md={8} lg={6} xl={4}>
                  <NormalSongStyle
                    {...item}
                    singerName={item.copywriter}
                    style={{ margin: '0 auto' }}
                    className='item'
                    badge
                    onClick={() => props.history.push(`/discover/dj/${item.id}`)}
                  >
                    <div className='tips'>{item.category}</div>
                  </NormalSongStyle>
                </Col>
              ))
            }
          </Row>
        </div>
        <div className='title'>电台排行榜</div>
        <Divider />
        <div className='all'>
          <Row gutter={[20, 40]}>
            {
              djList?.map(item => (
                <Col key={item.id} xs={24} md={12} lg={8} xl={8} xxl={6}>
                  <FlexSongStyle
                    {...item}
                    singerName={item.creatorName}
                    badge
                    onClick={() => props.history.push(`/discover/dj/${item.id}`)}
                  >
                    <div className='desc'>{item.rcmdtext}</div>
                    <div className='desc'>共{item.programCount}期</div>
                  </FlexSongStyle>
                </Col>
              ))
            }
          </Row>
        </div>
      </div>
    </DJStyle>
  )
})

export default AnchorStation