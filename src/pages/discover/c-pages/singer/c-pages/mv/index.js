import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerMvAction } from '../../store/actionCreators'

import { Row, Col } from 'antd'
import { PlayCircleFilled } from '@ant-design/icons'

import {
  MvItemStyle
} from './style'

const Mv = memo((props) => {

  const { params } = props.match

  const { mv } = useSelector(
    state => ({
      mv: state.getIn(['singer', 'mv'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerMvAction(params.id))
  }, [dispatch, params])

  return (
    <Row gutter={[30, 40]}>
      {
        mv.map(item => (
          <Col xs={24} md={12} lg={6} xl={6} xxl={4} key={item.id}>
            <MvItemStyle>
              <div className='mv-img'>
                <div className='play'>
                  <PlayCircleFilled />
                </div>
                <img src={item.imgurl} alt={item.name} />
              </div>
              <div className='mv-name'>{item.name}</div>
              <div className='singer-name'>{item.artistName}</div>
            </MvItemStyle>
          </Col>
        ))
      }
    </Row>
  )
})

export default Mv