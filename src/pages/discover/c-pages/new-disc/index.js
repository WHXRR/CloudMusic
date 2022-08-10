import React, { memo, useEffect, useState, useCallback } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNewDiscAction } from './store/actionCreators'

import { Col, Row, Divider } from 'antd'

import FlexSongStyle from '@/components/flex-song-style'
import Pagination from '@/components/pagination'

import {
  NewDiscStyle
} from './style'

import { backTop } from '@/utils/back-top'

const discCate = [
  {
    label: '全部',
    value: 'ALL'
  },
  {
    label: '华语',
    value: 'ZH'
  },
  {
    label: '欧美',
    value: 'EA'
  },
  {
    label: '韩国',
    value: 'KR'
  },
  {
    label: '日本',
    value: 'JP'
  },
]

const NewDisc = memo((props) => {

  useEffect(() => {
    backTop()
  }, [props.match.params.id])

  const dispatch = useDispatch()
  const { list, total } = useSelector(
    state => ({
      list: state.getIn(['newDisc', 'list']),
      total: state.getIn(['newDisc', 'total']),
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getNewDiscAction())
  }, [dispatch])

  const [currentCate, changeCurrentCate] = useState('ALL')
  const clickItem = data => {
    changeCurrent(1)
    changeCurrentCate(data.value)
    dispatch(getNewDiscAction(data.value))
  }

  const onClick = (data) => {
    props.history.push({
      pathname: `/discover/albumdetails/${data.id}`,
      state: {
        singerId: data.artist.id
      }
    })
  }

  const [current, changeCurrent] = useState(1)
  const handleChange = useCallback(
    (currentPage) => {
      changeCurrent(currentPage)
      const targePageCount = (currentPage - 1) * 30
      dispatch(getNewDiscAction(currentCate, 30, targePageCount))
    },
    [dispatch, currentCate]
  )

  return (
    <NewDiscStyle>
      <div className='top'>
        <div className='cate-title'>全部新碟</div>
        <div className='cate-content'>
          {
            discCate.map((item, idx) => (
              <div
                key={idx}
                className={'item ' + (currentCate === item.value ? 'selected' : '')}
                onClick={() => clickItem(item)}
              >
                {item.label}
              </div>
            ))
          }
        </div>
      </div>
      <Divider />
      <Row gutter={[20, 20]} style={{ marginBottom: '20px' }}>
        {
          list?.map(item => (
            <Col key={item.id} xs={24} lg={12} xxl={8}>
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
      <Pagination
        current={current}
        total={total}
        handleChange={handleChange}
        pageSize={30}
      />
    </NewDiscStyle>
  )
})

export default NewDisc