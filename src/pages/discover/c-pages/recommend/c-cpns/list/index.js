import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getListsAction } from '../../store/actionCreators'

import { Card } from 'antd';
import { FireTwoTone, PlayCircleFilled, RightOutlined } from '@ant-design/icons';
import {
  ListContent,
  ListItem,
  Flex
} from './style'

const Recommend = memo(() => {

  const dispatch = useDispatch()
  const { list1, list2, list3, listLoading } = useSelector(
    state => ({
      list1: state.getIn(['recommend', 'list1']),
      list2: state.getIn(['recommend', 'list2']),
      list3: state.getIn(['recommend', 'list3']),
      listLoading: state.getIn(['recommend', 'listLoading']),
    }),
    shallowEqual
  )
  useEffect(() => {
    dispatch(getListsAction())
  }, [dispatch])

  return (
    <ListContent>
      <ListItem>
        <Card
          hoverable
          loading={listLoading}
          style={{ width: 250, marginTop: 16 }}
          actions={[
            <div>
              查看更多
              <RightOutlined />
            </div>
          ]}
        >
          <div className='title1'>
            <FireTwoTone twoToneColor="#cf6094" />
            {list1.name}
          </div>
          <div>
            {
              list1.songs?.map((item, idx) => (
                <div className='song-item' key={idx}>
                  <Flex>
                    <span className={'num ' + (idx < 3 ? 'top-few' : '')}>{idx + 1}</span>
                    <span className='song-name' title={item.name}>{item.name}</span>
                  </Flex>
                  <PlayCircleFilled className='icon' />
                </div>
              ))
            }
          </div>
        </Card>
      </ListItem>
      <ListItem>
        <Card
          hoverable
          loading={listLoading}
          style={{ width: 250, marginTop: 16 }}
          actions={[
            <div>
              查看更多
              <RightOutlined />
            </div>
          ]}
        >
          <div className='title2'>
            <FireTwoTone twoToneColor="#55bbb9" />
            {list2.name}
          </div>
          <div className='body'>
            {
              list2.songs?.map((item, idx) => (
                <div className='song-item' key={idx}>
                  <Flex>
                    <span className={'num ' + (idx < 3 ? 'top-few' : '')}>{idx + 1}</span>
                    {item.name}
                  </Flex>
                  <PlayCircleFilled className='icon' />
                </div>
              ))
            }
          </div>
        </Card>
      </ListItem>
      <ListItem>
        <Card
          hoverable
          loading={listLoading}
          style={{ width: 250, marginTop: 16 }}
          actions={[
            <div>
              查看更多
              <RightOutlined />
            </div>
          ]}
        >
          <div className='title3'>
            <FireTwoTone twoToneColor="#64a3d9" />
            {list3.name}
          </div>
          <div className='body'>
            {
              list3.songs?.map((item, idx) => (
                <div className='song-item' key={idx}>
                  <Flex>
                    <span className={'num ' + (idx < 3 ? 'top-few' : '')}>{idx + 1}</span>
                    {item.name}
                  </Flex>
                  <PlayCircleFilled className='icon' />
                </div>
              ))
            }
          </div>
        </Card>
      </ListItem>
    </ListContent>
  )
})

export default Recommend