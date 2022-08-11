import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getSingerDetailsAction, getSingerMvAction } from '../../store/actionCreators'

import { Tabs } from 'antd';

import {
  SingerDetailsStyle
} from './style'

const { TabPane } = Tabs;

const SingerDetails = memo((props) => {

  const { params } = props.match

  const { details, hotList, album, mv, mvUrl, desc, simiSinger, isLoading } = useSelector(
    state => ({
      details: state.getIn(['singer', 'details']),
      hotList: state.getIn(['singer', 'hotList']),
      album: state.getIn(['singer', 'album']),
      mv: state.getIn(['singer', 'mv']),
      mvUrl: state.getIn(['singer', 'mvUrl']),
      desc: state.getIn(['singer', 'desc']),
      simiSinger: state.getIn(['singer', 'simiSinger']),
    }),
    shallowEqual
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingerDetailsAction(params.id))
    dispatch(getSingerMvAction(params.id))
  }, [dispatch, params])

  return (
    <SingerDetailsStyle src={details.cover}>
      <div className='singer-img' />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </SingerDetailsStyle>
  )
})

export default SingerDetails