import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUserAudioAction } from '../../store/actionCreators'

import DJStyle from '@/components/dj-style'

import { Divider } from 'antd';

import { OtherStyle } from './style'
import { NavLink } from 'react-router-dom';

const ProfileOther = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserAudioAction(params.id))
  }, [dispatch, params])

  const { audio, user: { profile } } = useSelector(
    state => ({
      audio: state.getIn(['profile', 'audio']),
      user: state.getIn(['profile', 'user']),
    }),
    shallowEqual
  )
  return (
    <OtherStyle>
      {
        audio.length > 0 && (
          <>
            <Divider
              orientation='left'
              style={{ fontSize: '17px', fontWeight: 'bold', margin: '30px 0', fontStyle: 'italic', color: '#06bcdc' }}
            >
              {profile?.nickname}创建的电台 ({audio.length})
            </Divider>
            {
              audio.map(item => (
                <NavLink key={item.id} to={`/discover/dj/${item.id}`}>
                  <DJStyle {...item} />
                </NavLink>
              ))
            }
          </>
        )
      }
    </OtherStyle>
  )
})

export default ProfileOther