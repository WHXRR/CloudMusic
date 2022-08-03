import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannersAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { BannerStyle } from './style'

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }) =>
  direction === 'left' ? (
    <LeftOutlined {...carouselProps} />
  ) : (
    <RightOutlined {...carouselProps} />
  )

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
        <Carousel
          autoplaySpeed={2000}
          autoplay
          arrows
          dots={false}
          nextArrow={<Arrow direction="right" />}
          prevArrow={<Arrow direction="left" />}
          style={{ width: '100vw' }}
        >
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