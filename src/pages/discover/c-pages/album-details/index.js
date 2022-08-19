import React, { memo, useEffect } from 'react'


import DetailContent from '@/components/detail-content'
import AlbumDetails from './c-pages/album-details'
import SongListComment from './c-pages/comment'
import OtherAlbum from './c-pages/other-album'

import { backTop } from '@/utils/back-top'

const SongDetail = memo((props) => {

  const { params } = props.match

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
        <OtherAlbum {...props} />
      </DetailContent>
    </>
  )
})

export default SongDetail