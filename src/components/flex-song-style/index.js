import React, { memo } from 'react'

import { CustomerServiceTwoTone, PlayCircleOutlined } from '@ant-design/icons';

import {
  SongItem
} from './style'

const FlexSongStyle = memo((props) => {

  const { onClick } = props

  return (
    <SongItem onClick={onClick}>
      <div className='hot'>
        <div className='hot-img'>
          <img src={props.picUrl ? props.picUrl : props[props.img]} alt={props.name} />
        </div>
        <div className='info'>
          <div className='hot-title'>{props.name}</div>
          <div className='singer-name'>{props.singerName}</div>
          {props.children}
          {
            props.playCount ? (
              <>
                <div>
                  <CustomerServiceTwoTone twoToneColor='#00badb' className='icon' />   
                  播放次数：
                  <span>{props.playCount}</span>
                </div>
              </>
            ) : <div></div>
          }
          <PlayCircleOutlined className='play-icon' />
        </div>
      </div>
    </SongItem>
  )
})

export default FlexSongStyle