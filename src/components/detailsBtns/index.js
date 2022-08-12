import React, { memo } from 'react'

import { useDispatch } from 'react-redux'
import { changeShowFlagAction, getCurrentSongAction } from '@/components/player/store/actionCreators'

import { Button } from 'antd'
import {
  PlayCircleOutlined,
  DownloadOutlined,
  CommentOutlined
} from '@ant-design/icons';

import { DetailsBtnsStyle } from './style'

import jumpComment from '@/utils/jump'
import { getPlayUrl } from '@/utils/format-utils.js'

const DetailsBtns = memo((props) => {

  const dispatch = useDispatch()
  const handlePlay = () => {
    dispatch(changeShowFlagAction(true))
    dispatch(getCurrentSongAction(props.songId))
  }

  const handleDownLoad = () => {
    window.open(getPlayUrl(props.songId))
  }

  return (
    <DetailsBtnsStyle>
      <Button
        type="primary"
        shape="round"
        ghost
        icon={<PlayCircleOutlined />}
        onClick={handlePlay}
      >
        播放
      </Button>
      {/* <Button type="primary" shape="round" ghost icon={<StarOutlined />}>收藏</Button>
      <Button type="primary" shape="round" ghost icon={<PaperClipOutlined />}>分享</Button> */}
      <Button
        type="primary"
        shape="round"
        ghost
        icon={<DownloadOutlined />}
        onClick={handleDownLoad}
      >
        下载
      </Button>
      <Button
        type="primary"
        shape="round"
        ghost
        icon={<CommentOutlined />}
        onClick={() => jumpComment('comment')}
      >
        评论({props.commentCount})
      </Button>
    </DetailsBtnsStyle>
  )
})

export default DetailsBtns