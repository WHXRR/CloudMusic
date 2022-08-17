import React, { memo } from 'react'

import ProfileInfo from './c-pages/profile-info'
import ProfileList from './c-pages/list'
import ProfileOther from './c-pages/other'

import { ProfileStyle } from './style'

const Profile = memo((props) => {

  return (
    <ProfileStyle>
      <ProfileInfo {...props} />
      <ProfileList {...props} />
      <ProfileOther {...props} />
    </ProfileStyle>
  )
})

export default Profile