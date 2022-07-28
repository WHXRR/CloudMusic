import React, { memo, useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

import request from '@/service/request'

const DisCover = memo((props) => {
  const { route } = props
  useEffect(() => {
    request({
      url: 'banner'
    }).then(res => {
      console.log(res, 'res');
    })
  }, [])

  return (
    <div>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
})

export default DisCover