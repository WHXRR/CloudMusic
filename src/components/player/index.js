import React, { useRef, memo, useState, useEffect, useCallback } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { changeShowFlagAction, changeFroceShowFlagAction, changePlayListAction } from './store/actionCreators'

import {
  LockOutlined,
  UnlockOutlined,
  StepBackwardOutlined,
  PlayCircleOutlined,
  PauseCircleOutlined,
  StepForwardOutlined,
  DisconnectOutlined,
  UnorderedListOutlined,
  CaretRightOutlined,
  ClearOutlined
} from '@ant-design/icons'
import { Slider, Dropdown } from 'antd'

import Music from '@/assets/img/music-icon.png'
import { PlayerStyle, PlayListStyle } from './style'

import { formatDate, getPlayUrl } from '@/utils/format-utils.js';

import { NavLink } from 'react-router-dom'

const Player = memo(() => {
  const dispatch = useDispatch()
  const { show, forceShow, currentSong, playList } = useSelector(
    state => ({
      show: state.getIn(['player', 'show']),
      forceShow: state.getIn(['player', 'forceShow']),
      currentSong: state.getIn(['player', 'currentSong']),
      playList: state.getIn(['player', 'playList']),
    }),
    shallowEqual
  )

  const [play, changePlay] = useState(false)

  const clickPlayer = () => {
    console.log(1);
  }

  const audioRef = useRef()
  // 设置音频src
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    // 设置音量
    audioRef.current.volume = 0.3;
  }, [currentSong]);
  // 播放、暂停
  const changePlayerStatus = () => {
    play ? audioRef.current.pause() : audioRef.current.play();
    changePlay(!play)
  }
  useEffect(() => {
    play && audioRef.current.play()
  }, [play])

  const [currentTime, setCurrentTime] = useState(0); // 用于保存当前播放的时间
  // 当前歌曲播放开始时
  const [progress, changeProgress] = useState(0)
  const [sliderIsChange, changeSlider] = useState(false)
  const timeUpdate = e => {
    let currentTime = e.target.currentTime;
    if (!sliderIsChange) {
      setCurrentTime(currentTime * 1000);
      changeProgress(((currentTime * 1000) / currentSong.dt) * 100);
    }
  }
  // 当前歌曲播放结束后
  const handleTimeEnd = () => {
  }
  // 滑动滑块时触发
  const sliderChange = useCallback(
    (value) => {
      changeSlider(true);
      const currentTime = (value / 100) * currentSong.dt;
      setCurrentTime(currentTime);
      changeProgress(value);
    },
    [currentSong.dt]
  );
  // 手指抬起时触发
  const slideAfterChange = useCallback(
    (value) => {
      const currentTime = ((value / 100) * currentSong.dt) / 1000;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      changeSlider(false);
      changePlay(true);
      audioRef.current.play();
    },
    [currentSong.dt, audioRef]
  );
  // 播放列表
  const menu = (
    <PlayListStyle>
      <div className='top'>
        <div className='normal-text font-bold'>播放列表</div>
        <div className='flex pointer' onClick={() => dispatch(changePlayListAction([]))}>
          <ClearOutlined style={{ marginRight: '5px' }} />
          清除
        </div>
      </div>
      {
        playList?.map(item => (
          <div key={item.id} className='song-item'>
            {
              item.id === currentSong.id ? (
                <CaretRightOutlined className='current-icon' />
              ) : <div></div>
            }
            <div className='text-overflow'>{item.name}</div>
            <div className='text-overflow'>{item.ar?.map(item => item.name).join('、')}</div>
            <div>{formatDate(item.dt, 'mm:ss')}</div>
          </div>
        ))
      }
    </PlayListStyle>
  );
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
              <PauseCircleOutlined className='icon play-icon' onClick={changePlayerStatus} />
            ) : (
              <PlayCircleOutlined className='icon play-icon' onClick={changePlayerStatus} />
            )
          }
          <StepForwardOutlined className='icon' onClick={clickPlayer} />
          <div className='song-info'>
            <NavLink to={`/discover/songdetail/${currentSong.id}`}>
              <img
                className='song-img pointer'
                src={currentSong.al?.picUrl || Music}
                alt={currentSong.name}
              />
            </NavLink>
            <div className='singer'>
              <div className='singer-info'>
                <NavLink to={`/discover/songdetail/${currentSong.id}`} className='white'>
                  <span className='pointer'>{currentSong.name}</span>
                </NavLink>
                <span className='singer-name grey pointer'>{currentSong.ar?.map(item => item.name).join('、')}</span>
                <DisconnectOutlined className='grey pointer' />
              </div>
              <div className='progress'>
                <Slider
                  className='mr-20 pointer slider'
                  defaultValue={0}
                  value={progress}
                  tooltipVisible={false}
                  onChange={sliderChange}
                  onAfterChange={slideAfterChange}
                />
                <div className='grey mr-3'>
                  {
                    (currentTime && formatDate(currentTime, 'mm:ss'))
                    ||
                    '00:00'
                  }
                </div>
                <div className='grey mr-3'>/</div>
                <div className='grey mr-3'>
                  {
                    (currentSong.dt && formatDate(currentSong.dt, 'mm:ss'))
                    ||
                    '00:00'
                  }
                </div>
              </div>
            </div>
          </div>
          <Dropdown overlay={menu} placement="top">
            <UnorderedListOutlined className='pointer icon' style={{ marginLeft: '30px' }} />
          </Dropdown>
        </div>
      </div>
      <audio
        id="audio"
        ref={audioRef}
        onTimeUpdate={timeUpdate}
        onEnded={handleTimeEnd}
        preload="auto"
      />
    </PlayerStyle>
  )
})

export default Player