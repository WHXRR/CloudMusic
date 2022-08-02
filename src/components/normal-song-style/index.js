import React, { memo } from 'react'

import { CustomerServiceTwoTone, PlayCircleOutlined } from '@ant-design/icons';

import {
  HotItem
} from './style'

const NormalSongStyle = memo((props) => {

  const { onClick } = props

  return (
    <HotItem onClick={onClick}>
      <div className='hot-img'>
        <img src={props.picUrl ? props.picUrl : props[props.img]} alt={props.name} />
        <div className='mantle'>
          <CustomerServiceTwoTone twoToneColor='#00badb' className='icon' />
          <div>{props.playCount}</div>
          <PlayCircleOutlined className='icon' />
        </div>
      </div>
      <div className='hot-title'>{props.name}</div>
      <div className='singer-name'>{props.singerName}</div>
    </HotItem>
  )
})

export default NormalSongStyle