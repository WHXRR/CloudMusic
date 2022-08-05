import React, { memo, useEffect, useState } from 'react'


import DetailContent from '@/components/detail-content'
import AlbumDetails from './c-pages/album-details'
import SongListComment from './c-pages/comment'
import OtherAlbum from './c-pages/other-album'

import { backTop } from '@/utils/back-top'

const SongDetail = memo((props) => {

  const { params } = props.match

  const [singerId, changeSingerId] = useState(0)

  if (!singerId) {
    if (props.location.state) {
      changeSingerId(props.location.state.singerId)
      sessionStorage.setItem('singerId', singerId);
    } else {
      const id = sessionStorage.getItem('singerId')
      changeSingerId(id)
    }
  }

  useEffect(() => {
    backTop()
  }, [params.id])

  return (
    <>
      <DetailContent name='songInfo'>
        <AlbumDetails {...props} />
      </DetailContent>
      <DetailContent name='commentInfo'>
        <SongListComment {...props} />
      </DetailContent>
      <DetailContent name='otherInfo'>
        <OtherAlbum {...props} singerId={singerId} />
      </DetailContent>
    </>
  )
})

export default SongDetail