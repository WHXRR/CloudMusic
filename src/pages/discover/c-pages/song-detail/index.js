import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getBannersAction, getLyricAction } from './store/actionCreators'

import DetailContent from '@/components/detail-content'
import Comments from './c-cpns/comments'
import SimiSong from './c-cpns/simi-song'

import { Button } from 'antd'
import { PlayCircleOutlined, StarOutlined, DownloadOutlined, PaperClipOutlined, CommentOutlined } from '@ant-design/icons';
import { SongDetailStyle } from './style'

import { backTop } from '@/utils/back-top'

const SongDetail = memo((props) => {

  const dispatch = useDispatch()
  const { params } = props.match
  const { detail, lyric } = useSelector(
    state => ({
      detail: state.getIn(['songDetail', 'detail']),
      lyric: state.getIn(['songDetail', 'lyric']),
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
        <div className='btns'>
          <Button type="primary" shape="round" ghost icon={<PlayCircleOutlined />}>播放</Button>
          <Button type="primary" shape="round" ghost icon={<StarOutlined />}>收藏</Button>
          <Button type="primary" shape="round" ghost icon={<PaperClipOutlined />}>分享</Button>
          <Button type="primary" shape="round" ghost icon={<DownloadOutlined />}>下载</Button>
          <Button type="primary" shape="round" ghost icon={<CommentOutlined />}>评论</Button>
        </div>
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