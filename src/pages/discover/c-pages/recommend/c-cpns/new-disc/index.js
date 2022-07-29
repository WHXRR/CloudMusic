import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getNewDiscAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { DiscContent, DiscSwiper, DiscItem } from './style'

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }) =>
  direction === 'left' ? (
      <LeftOutlined {...carouselProps} />
  ) : (
      <RightOutlined {...carouselProps} />
  )

const NewDisc = memo(() => {

  const dispatch = useDispatch()
  const { newDisc } = useSelector(
    state => ({
      newDisc: state.getIn(['recommend', 'newDisc']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getNewDiscAction())
  }, [dispatch])

  return (
    <DiscContent>
      <Carousel
        arrows
        dots={false}
        nextArrow={<Arrow direction="right" />}
        prevArrow={<Arrow direction="left" />}
      >
        {
          newDisc.map((arr, idx) => (
            <DiscSwiper key={idx}>
              {
                arr.map(item => (
                  <DiscItem key={item.id}>
                    <div className='img'>
                      <img src={item.picUrl} alt={item.name} />
                    </div>
                    <div className='sing-name'>{item.name}</div>
                    <div className='singer-name'>{item.artist.name}</div>
                  </DiscItem>
                ))
              }
            </DiscSwiper>
          ))
        }
      </Carousel>
    </DiscContent>
  )
})

export default NewDisc