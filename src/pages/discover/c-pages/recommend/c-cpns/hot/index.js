import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'

import { Col, Row } from 'antd';

import FlexSongStyle from '@/components/flex-song-style';

import {
  HotContent,
} from './style'

const Recommend = memo((props) => {

  const dispatch = useDispatch()
  const { hotRecommend } = useSelector(
    state => ({
      hotRecommend: state.getIn(['recommend', 'hotRecommend']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [dispatch])


  return (
    <HotContent>
      <Row gutter={[40, 20]}>
        {
          hotRecommend.map(item => (
            <Col md={24} lg={12} xl={12} xxl={8} key={item.id}>
              <FlexSongStyle {...item} onClick={() => props.history.push(`/discover/songlistdetails/${item.id}`)} />
            </Col>
          ))
        }
      </Row>
    </HotContent>
  )
})

export default Recommend