import React, { memo } from 'react'

import { CustomerServiceTwoTone, PlayCircleOutlined } from '@ant-design/icons';

import {
  HotItem
} from './style'

const NormalSongStyle = memo((props) => {

  const { onClick } = props

  return (
    <HotItem onClick={onClick} style={props.style} className={props.className}>
      <div className='hot-img'>
        <img src={props.picUrl ? props.picUrl : props[props.img]} alt={props.name} />
        <div className='mantle'>
          {
            props.playCount ? (
              <>
                <CustomerServiceTwoTone twoToneColor='#00badb' className='icon' />
                <div>{props.playCount}</div>
              </>
            ) : <div></div>
          }
          <PlayCircleOutlined className='icon' />
        </div>
      </div>
      <div className='hot-title' title={props.name}>{props.name}</div>
      <div className='singer-name' title={props.singerName}>{props.singerName}</div>
      {
        props.badge && <>{props.children}</>
      }
    </HotItem>
  )
})

export default NormalSongStyle