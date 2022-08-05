import React, { memo } from 'react'

import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { DiscContent, DiscSwiper, DiscItem } from './style'

const Arrow = ({ currentSlide, direction, slideCount, ...carouselProps }) =>
  direction === 'left' ? (
    <LeftOutlined {...carouselProps} />
  ) : (
    <RightOutlined {...carouselProps} />
  )

const SwiperSongStyle = memo((props) => {

  const { onClick } = props

  return (
    <DiscContent>
      <Carousel
        arrows
        dots={false}
        nextArrow={<Arrow direction="right" />}
        prevArrow={<Arrow direction="left" />}
      >
        {
          props.data?.map((arr, idx) => (
            <DiscSwiper key={idx}>
              {
                Array.isArray(arr) ? arr.map(item => (
                  <DiscItem key={item.id} onClick={() => onClick(item)}>
                    <div className='img'>
                      <img src={item.picUrl} alt={item.name} />
                    </div>
                    <div className='sing-name'>{item.name}</div>
                    <div className='singer-name'>{item.artist.name}</div>
                  </DiscItem>
                )) : null
              }
            </DiscSwiper>
          ))
        }
      </Carousel>
    </DiscContent>
  )
})

export default SwiperSongStyle