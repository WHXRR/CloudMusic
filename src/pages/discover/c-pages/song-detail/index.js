import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannersAction, getLyricAction } from './store/actionCreators'

import DetailContent from '@/components/detail-content'
import Comments from './c-cpns/comments'
import SimiSong from './c-cpns/simi-song'
import DetailsBtns from '@/components/details-btns'

import { SongDetailStyle } from './style'

import { backTop } from '@/utils/back-top'

const SongDetail = memo((props) => {

  const dispatch = useDispatch()
  const { params } = props.match
  const { detail, lyric, total } = useSelector(
    state => ({
      detail: state.getIn(['songDetail', 'detail']),
      lyric: state.getIn(['songDetail', 'lyric']),
      total: state.getIn(['songDetail', 'total'])
    }),
    shallowEqual
  )
  useEffect(() => {
    backTop()
    dispatch(getBannersAction(params.id))
    dispatch(getLyricAction(params.id))
  }, [dispatch, params.id])

  return (
    <SongDetailStyle>
      <DetailContent name='songInfo' backgroundImg={detail[0]?.al?.picUrl}>
        <img className='song-img' src={detail[0]?.al?.picUrl} alt={detail[0]?.al?.name} />
        <div className='song-name'>{detail[0]?.name}</div>
        <div className='other-info'>
          <span>歌手：</span>
          <span className='link'>{detail[0]?.ar[0].name}</span>
        </div>
        <div className='other-info'>
          <span>所属专辑：</span>
          <span className='link'>{detail[0]?.al?.name}</span>
        </div>
        {
          params.id && <DetailsBtns
            songId={params.id}
            commentCount={total}
          />
        }
        <div className='lyric'>
          {
            lyric.map((item, idx) => (
              <div key={idx}>{item.content}</div>
            ))
          }
        </div>
      </DetailContent>
      <DetailContent name='commentInfo'>
        <Comments {...props} />
      </DetailContent>
      <DetailContent name='otherInfo'>
        <SimiSong {...props} />
      </DetailContent>
    </SongDetailStyle>
  )
})

export default SongDetail