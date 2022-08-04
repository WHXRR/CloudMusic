import React, { memo, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeShowFlagAction, changeFroceShowFlagAction } from './store/actionCreators'

import {
  LockOutlined,
  UnlockOutlined,
  StepBackwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepForwardOutlined,
  DisconnectOutlined
} from '@ant-design/icons'
import { Progress } from 'antd'

import Music from '@/assets/img/music-icon.png'
import { PlayerStyle } from './style'

const Player = memo(() => {

  const dispatch = useDispatch()
  const { show, forceShow } = useSelector(
    state => ({
      show: state.getIn(['player', 'show']),
      forceShow: state.getIn(['player', 'forceShow']),
    }),
    shallowEqual
  )

  const [play, changePlay] = useState(false)

  const clickPlayer = () => {
    console.log(1);
  }

  return (
    <PlayerStyle>
      <div
        className={'content ' + ((forceShow || show) ? 'show' : '')}
        onMouseEnter={() => dispatch(changeShowFlagAction(true))}
        onMouseLeave={() => dispatch(changeShowFlagAction(false))}
      >
        {
          forceShow ? (
            <LockOutlined
              className='lock'
              onClick={() => dispatch(changeFroceShowFlagAction(false))}
            />
          ) : (
            <UnlockOutlined
              className='lock'
              onClick={() => dispatch(changeFroceShowFlagAction(true))}
            />
          )
        }
        <div className='footer-content'>
          <StepBackwardOutlined className='icon' onClick={clickPlayer} />
          {
            play ? (
              <PauseCircleOutlined className='icon play-icon' onClick={() => changePlay(!play)} />
            ) : (
              <PlayCircleOutlined className='icon play-icon' onClick={() => changePlay(!play)} />
            )
          }
          <StepForwardOutlined className='icon' onClick={clickPlayer} />
          <div className='song-info'>
            <img className='song-img pointer' src={Music} alt='a' />
            <div className='singer'>
              <div className='singer-info'>
                <span className='pointer'>阴天快乐</span>
                <span className='singer-name grey pointer'>陈奕迅</span>
                <DisconnectOutlined className='grey pointer' />
              </div>
              <div className='progress'>
                <Progress
                  className='mr-20 pointer'
                  percent={50}
                  showInfo={false}
                  strokeColor='#00badb'
                />
                <div className='grey mr-3'>00:00</div>
                <div className='grey mr-3'>/</div>
                <div className='grey mr-3'>04:11</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PlayerStyle>
  )
})

export default Player