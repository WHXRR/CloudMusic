import React, { memo } from 'react'

import { Pagination } from 'antd'
import { PaginationStyle } from './style'

const Cpagination = memo((props) => {

  const { current, total, handleChange, pageSize = 20, size = 'small' } = props

  return (
    <PaginationStyle>
      <Pagination
        size={size}
        current={current}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        onChange={handleChange}
      />
    </PaginationStyle>
  )
})

export default Cpagination