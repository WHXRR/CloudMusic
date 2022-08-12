import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getListsAction } from '../../store/actionCreators'
import { changeShowFlagAction, getCurrentSongAction } from '@/components/player/store/actionCreators'

import { Card, Col, Row } from 'antd';
import { FireTwoTone, PlayCircleFilled, RightOutlined } from '@ant-design/icons';
import {
  ListItem,
  Flex
} from './style'

const colors = {
  color1: '#cf6094',
  color2: '#55bbb9',
  color3: '#64a3d9',
  color4: '#c70c0c'
}

const Recommend = memo((props) => {

  const dispatch = useDispatch()
  const { list, listLoading } = useSelector(
    state => ({
      list: state.getIn(['recommend', 'list']),
      listLoading: state.getIn(['recommend', 'listLoading']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getListsAction())
  }, [dispatch])

  const toDetails = (id) => {
    props.history.push(`/discover/songdetail/${id}`)
  }

  const clickPlayBtn = data => {
    dispatch(changeShowFlagAction(true))
    dispatch(getCurrentSongAction(data.id))
  }

  const handleMore = data => {
    props.history.push({
      pathname: `/discover/rankinglist/${data.id}`,
    })
  }

  return (
    <Row gutter={[20, 20]} justify="space-around">
      {
        list.map((item, index) => (
          <Col key={index} sm={12} md={6}>
            <ListItem>
              <Card
                hoverable
                loading={listLoading}
                style={{ width: 250, margin: '16px auto' }}
                actions={[
                  <div onClick={() => handleMore(item)}>
                    查看更多
                    <RightOutlined />
                  </div>
                ]}
              >
                <div style={{ backgroundColor: colors[`color${index + 1}`] }} className='title'>
                  <FireTwoTone twoToneColor={colors[`color${index + 1}`]} />
                  {item.name}
                </div>
                <div>
                  {
                    item.songs?.map((ele, idx) => (
                      <div className='song-item' key={idx}>
                        <Flex onClick={() => toDetails(ele.id)}>
                          <span className={'num ' + (idx < 3 ? 'top-few' : '')}>{idx + 1}</span>
                          <span className='song-name' title={ele.name}>{ele.name}</span>
                        </Flex>
                        <PlayCircleFilled className='icon' onClick={() => clickPlayBtn(ele)} />
                      </div>
                    ))
                  }
                </div>
              </Card>
            </ListItem>
          </Col>
        ))
      }
    </Row>
  )
})

export default Recommend