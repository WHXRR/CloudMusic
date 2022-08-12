import React, { memo } from 'react'

import ProfileInfo from './c-pages/profile-info'
import ProfileList from './c-pages/list'
import ProfileOther from './c-pages/other'

const Profile = memo((props) => {

  return (
    <div>
      <ProfileInfo {...props} />
      <ProfileList {...props} />
      <ProfileOther {...props} />
    </div>
  )
})

export default Profile