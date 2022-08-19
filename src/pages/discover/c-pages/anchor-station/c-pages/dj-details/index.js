import React, { memo, useEffect, useState, useCallback } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getDJDetailsAction, getDJProgramAction } from '../../store/actionCreators'
// import { changeShowFlagAction, getCurrentSongAction } from '@/components/player/store/actionCreators'

import Cpagination from '@/components/pagination'

import { Tag } from 'antd'
import {
  PlayCircleFilled,
  CaretUpOutlined,
  CaretDownOutlined
} from '@ant-design/icons'

import { DJDetailsStyle } from './style'

import { backTop } from '@/utils/back-top'
import { formatTime, formatMinuteSecond } from '@/utils/format-utils'


const DJDetails = memo((props) => {

  const { params } = props.match
  const dispatch = useDispatch()

  useEffect(() => {
    backTop()
    dispatch(getDJDetailsAction(params.id))
    dispatch(getDJProgramAction(params.id))
  }, [dispatch, params])

  const { details, program } = useSelector(
    state => ({
      details: state.getIn(['dj', 'details']),
      program: state.getIn(['dj', 'program']),
    }),
    shallowEqual
  )

  const handlePlay = data => {
    // dispatch(changeShowFlagAction(true))
    // dispatch(getCurrentSongAction(data.id))
  }

  const [current, changeCurrent] = useState(1)
  const handleChange = useCallback(
    (currentPage) => {
      changeCurrent(currentPage)
      const targePageCount = (currentPage - 1) * 30
      dispatch(getDJProgramAction(params.id, 30, targePageCount))
    },
    [dispatch, params.id]
  )

  const [flag, setFlag] = useState(false)
  const handleSort = useCallback(
    data => {
      setFlag(data)
      changeCurrent(1)
      dispatch(getDJProgramAction(params.id, 30, null, data))
    },
    [dispatch, params.id]
  )

  return (
    <DJDetailsStyle>
      <div className='top'>
        <img className='dj-img' src={details.picUrl} alt={details.name} />
        <div className='details'>
          <div className='flex'>
            <div className='cate'>电台</div>
            <div className='dj-name'>{details.name}</div>
          </div>
          <div className='user'>
            <img className='user-img' src={details.dj?.avatarUrl} alt={details.dj?.nickname} />
            <NavLink to={`/user/home/${details.dj?.userId}`}>{details.dj?.nickname}</NavLink>
            <img
              src={details.dj?.avatarDetail?.identityIconUrl}
              alt={details.dj?.nickname}
              style={{ width: '13px' }}
            />
          </div>
          <div>
            <Tag color="magenta">{details.category}</Tag>
            <Tag color="volcano">{details.secondCategory}</Tag>
            <Tag color="cyan">{details.rcmdText}</Tag>
          </div>
          <div className='desc'>{details.desc}</div>
        </div>
      </div>
      <div className='center'>
        <div className='title'>
          <div>
            <span className='font-bold' style={{ fontSize: '18px', paddingRight: '10px' }}>节目列表</span>
            <span className='grey'>共 {program.count} 期</span>
          </div>
          <div>
            <CaretDownOutlined className={'option-icon ' + (flag ? '' : 'selected')} onClick={() => handleSort(false)} />
            <CaretUpOutlined className={'option-icon ' + (flag ? 'selected' : '')} onClick={() => handleSort(true)} />
          </div>
        </div>
        <div style={{ marginBottom: '20px' }}>
          {
            program.programs?.map(item => (
              <div className='program-item' key={item.id}>
                <div className='index'>
                  <div className='text'>{item.serialNum}</div>
                  <div className='icon'>
                    <PlayCircleFilled onClick={() => handlePlay(item)} />
                  </div>
                </div>
                <div>{item.name}</div>
                <div>播放 {item.listenerCount}</div>
                <div>赞 {item.likedCount}</div>
                <div>{formatTime(item.createTime)}</div>
                <div>{formatMinuteSecond(item.duration)}</div>
              </div>
            ))
          }
        </div>
        <Cpagination
          current={current}
          pageSize={30}
          total={program.count}
          handleChange={(e) => handleChange(e)}
        />
      </div>
    </DJDetailsStyle>
  )
})

export default DJDetails