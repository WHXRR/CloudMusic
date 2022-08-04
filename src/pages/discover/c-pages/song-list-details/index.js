import React, { memo, useEffect } from 'react'


import DetailContent from '@/components/detail-content'
import SongList from './c-pages/song-list'
import SongListComment from './c-pages/comment'
import SimiSongList from './c-pages/simi-song-list'

import { backTop } from '@/utils/back-top'

const SongDetail = memo((props) => {

  useEffect(() => {
    backTop()
  }, [])

  return (
    <>
      <DetailContent name='songInfo'>
        <SongList {...props} />
      </DetailContent>
      <DetailContent name='commentInfo'>
        <SongListComment {...props} />
      </DetailContent>
      <DetailContent name='otherInfo'>
        <SimiSongList {...props} />
      </DetailContent>
    </>
  )
})

export default SongDetail