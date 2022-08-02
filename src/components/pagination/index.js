import React, { memo } from 'react'

import { Pagination } from 'antd'
import { PaginationStyle } from './style'

const Cpagination = memo((props) => {

  const { current, total, handleChange } = props

  return (
    <PaginationStyle>
      <Pagination
        size="small"
        current={current}
        total={total}
        showSizeChanger={false}
        onChange={handleChange}
      />
    </PaginationStyle>
  )
})

export default Cpagination