import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerMvAction } from '../../store/actionCreators'

import { Row, Col } from 'antd'

import { getSingerMvUrl } from '@/service/singer'

import MVStyle from '@/components/mv-style'

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

  const onClick = async data => {
    let res = {}
    res = await getSingerMvUrl(data.id)
    window.open(res.data.url, '_black')
  }

  return (
    <Row gutter={[30, 40]}>
      {
        mv.map(item => (
          <Col xs={24} md={12} lg={6} xl={6} xxl={4} key={item.id} onClick={() => onClick(item)}>
            <MVStyle
              {...item}
            />
          </Col>
        ))
      }
    </Row>
  )
})

export default Mv