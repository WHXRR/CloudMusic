import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerDescAction } from '../../store/actionCreators'

import {
  DescStyle
} from './style'

const Desc = memo((props) => {

  const { params } = props.match

  const { desc } = useSelector(
    state => ({
      desc: state.getIn(['singer', 'desc']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerDescAction(params.id))
  }, [dispatch, params])

  return (
    <DescStyle>
      <div className='title'>简介</div>
      <div className='content indent'>{desc.briefDesc}</div>
      {
        desc.introduction?.map((item, idx) => (
          <div key={idx}>
            <div className='title'>{item.ti}&nbsp;</div>
            <div className='content' style={{ whiteSpace: 'pre-line' }}>{item.txt}</div>
          </div>
        ))
      }
    </DescStyle >
  )
})

export default Desc