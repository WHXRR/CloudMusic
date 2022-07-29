import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannersAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import { BannerStyle } from './style'


const Recommend = memo(() => {
  const dispatch = useDispatch()
  const { banner } = useSelector(
    state => ({
      banner: state.getIn(['recommend', 'banner']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getBannersAction())
  }, [dispatch])

  return (
    <div>
      <BannerStyle>
        <Carousel autoplay>
          {
            banner.map(item => (
              <div key={item.imageUrl}>
                <img src={item.imageUrl} alt={item.typeTitle} />
              </div>
            ))
          }
        </Carousel>
      </BannerStyle>
    </div>
  )
})

export default Recommend