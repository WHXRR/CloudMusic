import { Avatar } from 'antd'
import React, { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux'

import { LeftOutlined } from '@ant-design/icons'

import { ProfileStyle } from './style'
import { NavLink } from 'react-router-dom'

const ProfileSidebar = memo((props) => {

  const { profile, token } = useSelector(
    state => ({
      profile: state.getIn(['login', 'profile']),
      token: state.getIn(['login', 'token']),
    }),
    shallowEqual
  )
  console.log({ props });

  return (
    <ProfileStyle>
      <LeftOutlined className='left' />
      {
        token && (
          <>
            <NavLink to={`/user/home/${profile.userId}`}>
              <Avatar src={profile.avatarUrl} size='large' />
            </NavLink>
            <div className='font-bold' style={{ paddingTop: '5px' }}>
              <NavLink to={`/user/home/${profile.userId}`}>{profile.nickname}</NavLink>
            </div>
            <div className='info'>
              <div className='info-item'>
                <NavLink to={`/user/home/${profile.userId}`}>
                  <div className='font-bold'>{profile.eventCount}</div>
                  <div className='info-label'>动态</div>
                </NavLink>
              </div>
              <div className='info-item'>
                <NavLink to={`/user/home/${profile.userId}`}>
                  <div className='font-bold'>{profile.follows}</div>
                  <div className='info-label'>关注</div>
                </NavLink>
              </div>
              <div className='info-item'>
                <NavLink to={`/user/home/${profile.userId}`}>
                  <div className='font-bold'>{profile.followeds}</div>
                  <div className='info-label'>粉丝</div>
                </NavLink>
              </div>
            </div>
          </>
        )
      }
    </ProfileStyle>
  )
})

export default ProfileSidebar