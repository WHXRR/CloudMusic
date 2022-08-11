import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerAlbumAction } from '../../store/actionCreators'

import FlexSongStyle from '@/components/flex-song-style'

import { Col, Row } from 'antd'

const Album = memo((props) => {

  const { params } = props.match

  const { album } = useSelector(
    state => ({
      album: state.getIn(['singer', 'album'])
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerAlbumAction(params.id))
  }, [dispatch, params])

  const onClick = (data) => {
    props.history.push({
      pathname: `/discover/albumdetails/${data.id}`,
      state: {
        singerId: data.artist.id
      }
    })
  }

  return (
    <div>
      <Row gutter={[20, 30]}>
        {
          album.map(item => (
            <Col xs={24} sm={12} md={8} xl={6} key={item.id}>
              <FlexSongStyle
                onClick={() => onClick(item)}
                picUrl={item.picUrl}
                name={item.name}
                singerName={item.artist?.name}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
})

export default Album