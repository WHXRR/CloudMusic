import React, { memo, useEffect, useState, useCallback } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBannersAction, getSongListAction } from './store/actionCreators'

import FlexSongStyle from '@/components/flex-song-style'
import Pagination from '@/components/pagination'

import { Col, Row, Divider } from 'antd'
import {
  SongSheetStyle,
  CateItemStyle
} from './style'

const SongSheet = memo((props) => {
  const dispatch = useDispatch()
  const { catList, songList, total } = useSelector(
    state => ({
      catList: state.getIn(['songList', 'catList']),
      songList: state.getIn(['songList', 'songList']),
      total: state.getIn(['songList', 'total']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getBannersAction())
    dispatch(getSongListAction())
  }, [dispatch])

  const onClick = (data) => {
    props.history.push(`/discover/songlistdetails/${data.id}`)
  }

  const [currentCate, changeCate] = useState('')
  const clickCate = data => {
    changeCate(data.name)
    changeCurrent(1)
    dispatch(getSongListAction(data.name))
  }

  const [current, changeCurrent] = useState(1)
  const handleChange = useCallback(
    (currentPage) => {
      changeCurrent(currentPage)
      const targePageCount = (currentPage - 1) * 50
      dispatch(getSongListAction(currentCate, 50, targePageCount))
    },
    [dispatch, currentCate]
  )

  return (
    <SongSheetStyle>
      {
        catList.map((item, idx) => (
          <CateItemStyle key={idx}>
            <div className='cate-title'>{item.name}</div>
            <div className='sub'>
              {
                item.sub?.map((ele, idx2) => (
                  <div key={idx2} className={'sub-item ' + (currentCate === ele.name ? 'selected' : '')} onClick={() => clickCate(ele)}>{ele.name}</div>
                ))
              }
            </div>
          </CateItemStyle>
        ))
      }
      <Divider />
      <Row gutter={[20, 20]} style={{ marginBottom: '20px' }}>
        {
          songList.map(item => (
            <Col key={item.id} xs={24} lg={12} xxl={8}>
              <FlexSongStyle
                onClick={() => onClick(item)}
                picUrl={item.coverImgUrl}
                name={item.name}
                singerName={item.creator?.nickname}
                playCount={item.playCount}
              />
            </Col>
          ))
        }
      </Row>
      <Pagination
        current={current}
        total={total}
        handleChange={handleChange}
        pageSize={50}
      />
    </SongSheetStyle>
  )
})

export default SongSheet