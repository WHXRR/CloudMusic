import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUserDetailsAction, getUserLevelAction } from '../../store/actionCreators'

import { Progress, Tooltip, Divider } from 'antd';
import {
  ProfileInfoStyle,
  LevelContentStyle
} from './style'

const ProfileInfo = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetailsAction(params.id))
    dispatch(getUserLevelAction(params.id))
  }, [dispatch, params])

  const { user: { profile }, level } = useSelector(
    state => ({
      user: state.getIn(['profile', 'user']),
      level: state.getIn(['profile', 'level']),
    }),
    shallowEqual
  )

  const levelContent = () => {
    return (
      <LevelContentStyle>
        <Progress
          strokeColor={{
            '0%': '#ffa58d',
            '100%': '#f75757',
          }}
          percent={level.level * 10}
          width={50}
        />
        <div>当前等级特权：{level.info}</div>
        <div>距离下一等级：<span className='font-bold red'>Lv {level.level + 1}</span></div>
        <div>还需听歌 <span className='font-bold red'>{level.nextPlayCount - level.nowPlayCount}</span> 首</div>
        <div>还需登录 <span className='font-bold red'>{level.nextLoginCount - level.nowLoginCount}</span> 天</div>
      </LevelContentStyle>
    )
  }

  const getBirthday = (date) => {
    let time = new Date(date)
    return (
      <span>{time.getFullYear()}-{time.getMonth() + 1}-{time.getDate()}</span>
    )
  }

  return (
    <ProfileInfoStyle>
      <img className='avatar' src={profile?.avatarUrl} alt={profile?.nickname} />
      <div className='info'>
        <div className='top'>
          <div className='name'>{profile?.nickname}</div>
          <Tooltip title={levelContent()} color='#fff'>
            <div className='level'>Lv {level.level}</div>
          </Tooltip>
          <span title={profile?.gender ? profile?.gender === 1 ? '男' : '女' : '保密'}>
            {profile?.gender ? profile?.gender === 1 ? '🚹' : '🚺' : '保密'}
          </span>
        </div>
        <Divider dashed style={{ margin: '10px 0' }} />
        <div className='grid'>
          <div className='grey'>生日：{getBirthday(profile?.birthday)}</div>
          <div className='grey'>注册时间：{getBirthday(profile?.createTime)}</div>
        </div>
        <div className='grid'>
          <div className='grey'>动态：{profile?.eventCount}</div>
          <div className='grey'>关注：{profile?.follows}</div>
          <div className='grey'>粉丝：{profile?.followeds}</div>
        </div>
        <div className='grey font-bold'>个人介绍：{profile?.signature}</div>
      </div>
    </ProfileInfoStyle>
  )
})

export default ProfileInfo