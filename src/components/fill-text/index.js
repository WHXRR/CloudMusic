import React, { memo } from 'react'

import { LookMoreStyle } from './style'

const FillText = memo((props) => {

  return (
    <LookMoreStyle
      {...props}
      style={props.style}
      className={props.className}
    >
      <div className='old-color'>
        <div>{props.children}</div>
        <div className={'new-color ' + (props.animation ? 'animation' : 'transition')}>
          <div>{props.children}</div>
        </div>
      </div>
    </LookMoreStyle>
  )
})

export default FillText