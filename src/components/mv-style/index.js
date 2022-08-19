import React, { memo } from 'react'

import { PlayCircleFilled } from '@ant-design/icons'

import { MvItemStyle } from './style'

const MVStyle = memo((props) => {
  return (
    <MvItemStyle>
      <div className='mv-img'>
        <div className='play'>
          <PlayCircleFilled />
        </div>
        <div className='mask'></div>
        <img src={props.imgurl} alt={props.name} />
      </div>
      <div className='mv-name'>{props.name}</div>
      <div className='singer-name'>{props.artistName}</div>
    </MvItemStyle>
  )
})

export default MVStyle