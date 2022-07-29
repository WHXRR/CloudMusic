import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'


const DisCover = memo((props) => {
  const { route } = props

  return (
    <div>
      <div>{renderRoutes(route.routes)}</div>
    </div>
  )
})

export default DisCover