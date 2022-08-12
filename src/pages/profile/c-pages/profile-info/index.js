import React, { memo, useEffect } from 'react'

import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { getUserDetailsAction } from '../../store/actionCreators'

const ProfileInfo = memo((props) => {
  const { params } = props.match
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserDetailsAction(params.id))
  }, [dispatch, params])
  
  const { user } = useSelector(
    state => ({
      user: state.getIn(['profile', 'user']),
    }),
    shallowEqual
  )

  return (
    <div>
      {
        user.nickname
      }
    </div>
  )
})

export default ProfileInfo