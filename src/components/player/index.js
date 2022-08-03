import React, { memo, useState } from 'react'

import { PlayerStyle } from './style'

const Player = memo(() => {

  const [show, changShow] = useState(false)
  const handleMouseEnter = () => {
    changShow(true)
  }

  let preHeight = 0
  const bindHandleScroll = (event) => {
    const scrollTop = event.srcElement.documentElement.scrollTop
      || window.pageYOffset
      || event.srcElement.body.scrollTop;
    if (!preHeight) {
      preHeight = scrollTop
    }
    if (scrollTop > preHeight) {
      changShow(true)
    }
  }
  window.addEventListener('scroll', bindHandleScroll)

  return (
    <PlayerStyle onMouseEnter={handleMouseEnter}>
      <div className={'content ' + (show ? 'show' : '')}>Player</div>
    </PlayerStyle>
  )
})

export default Player