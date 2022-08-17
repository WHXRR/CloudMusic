import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUserPlayListAction } from '../../store/actionCreators'

import { Row, Col, Divider } from 'antd';

import NormalSongStyle from '@/components/normal-song-style'

const ProfileList = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPlayListAction(params.id))
  }, [dispatch, params])

  const { playlist, subPlayList, user: { profile } } = useSelector(
    state => ({
      playlist: state.getIn(['profile', 'playlist']),
      subPlayList: state.getIn(['profile', 'subPlayList']),
      user: state.getIn(['profile', 'user']),
    }),
    shallowEqual
  )

  return (
    <div>
      {
        playlist.length > 0 && (
          <>
            <Divider
              orientation='left'
              style={{ fontSize: '17px', fontWeight: 'bold', margin: '30px 0', fontStyle: 'italic', color: '#06bcdc' }}
            >
              {profile?.nickname}创建的歌单 ({playlist.length})
            </Divider>
            <Row gutter={[20, 40]}>
              {
                playlist.map(item => (
                  <Col
                    xs={24}
                    md={6}
                    xl={4}
                    key={item.id}
                  >
                    <NormalSongStyle
                      picUrl={item.coverImgUrl}
                      singerName={item.description}
                      {...item}
                      onClick={() => props.history.push(`/discover/songlistdetails/${item.id}`)}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        )
      }
      {
        subPlayList.length > 0 && (
          <>
            <Divider
              orientation='left'
              style={{ fontSize: '17px', fontWeight: 'bold', margin: '30px 0', fontStyle: 'italic', color: '#06bcdc' }}
            >
              {profile?.nickname}收藏的歌单 ({subPlayList.length})
            </Divider>
            <Row gutter={[20, 40]}>
              {
                subPlayList.map(item => (
                  <Col
                    xs={24}
                    md={6}
                    xl={4}
                    key={item.id}
                  >
                    <NormalSongStyle
                      picUrl={item.coverImgUrl}
                      {...item}
                      onClick={() => props.history.push(`/discover/songlistdetails/${item.id}`)}
                    />
                  </Col>
                ))
              }
            </Row>
          </>
        )
      }
    </div>
  )
})

export default ProfileList