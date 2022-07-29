import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotRecommendAction } from '../../store/actionCreators'

import { CustomerServiceTwoTone, PlayCircleOutlined } from '@ant-design/icons';
import {
  HotContent,
  HotItem
} from './style'

const Recommend = memo(() => {

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
      {
        hotRecommend.map(item => (
          <HotItem key={item.id}>
            <div className='hot-img'>
              <img src={item.picUrl} alt={item.name} />
              <div className='mantle'>
                <CustomerServiceTwoTone twoToneColor='#00badb' className='icon' />
                <div>{item.playCount}</div>
                <PlayCircleOutlined className='icon' />
              </div>
            </div>
            <div className='hot-title'>{item.name}</div>
          </HotItem>
        ))
      }
    </HotContent>
  )
})

export default Recommend