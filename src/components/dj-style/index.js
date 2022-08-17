import React, { memo } from 'react'

import { DJContent } from './style'

const DJStyle = memo((props) => {
  return (
    <DJContent>
      <img className='dj-img' src={props.picUrl} alt={props.name} />
      <div className='dj-name font-bold'>{props.name}</div>
      {
        props.desc ? (
          <div className='grey'>{props.desc}</div>
        ) : (
          <div></div>
        )
      }
      {
        props.read ? (
          <div className='grey'>阅读总量：{props.name}</div>
        ) : (
          <div></div>
        )
      }
      {
        props.subCount ? (
          <div className='grey'>订阅 {props.subCount} 次</div>
        ) : (
          <div></div>
        )
      }
      {
        props.programCount ? (
          <div className='grey'>{props.programCount} 期</div>
        ) : (
          <div></div>
        )
      }
      {
        props.category ? (
          <div className='category'>{props.category}</div>
        ) : (
          <div></div>
        )
      }
    </DJContent>
  )
})

export default DJStyle