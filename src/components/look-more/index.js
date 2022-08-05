import React, { memo } from 'react'

import { LookMoreStyle } from './style'

import { RightCircleFilled } from '@ant-design/icons'

const LookMore = memo((props) => {

  return (
    <LookMoreStyle {...props}>
      <div className='old-color'>
        <div className='mr-5'>查看更多</div>
        <RightCircleFilled />
        <div className={'new-color ' + (props.animation ? 'animation' : 'transition')}>
          <div className='mr-5'>查看更多</div>
          <RightCircleFilled />
        </div>
      </div>
    </LookMoreStyle>
  )
})

export default LookMore