import React, { memo } from 'react'

import { SongInfo, CommentInfo, OtherInfo } from './style'

const DetailContent = memo((props) => {
  return (
    <div>
      {
        props.name === 'songInfo' ? (
          <SongInfo backgroundImg={props.backgroundImg}>{props.children}</SongInfo>
        ) : null
      }
      {
        props.name === 'commentInfo' ? (
          <CommentInfo>{props.children}</CommentInfo>
        ) : null
      }
      {
        props.name === 'otherInfo' ? (
          <OtherInfo>{props.children}</OtherInfo>
        ) : null
      }
    </div>
  )
})

export default DetailContent