import React, { memo } from 'react'

import TopBanners from './c-cpns/top-banners'
import Hot from './c-cpns/hot'
import NewDisc from './c-cpns/new-disc'
import List from './c-cpns/list'

import { Title } from './style'

const Recommend = memo(() => {
  return (
    <div>
      <TopBanners />
      <Title>
        <div className='top-title'>热门推荐</div>
        <div className='sub-title'>Popular Recommendations</div>
      </Title>
      <Hot />
      <Title>
        <div className='top-title'>新碟上架</div>
        <div className='sub-title'>New disc on shelves</div>
      </Title>
      <NewDisc />
      <Title>
        <div className='top-title'>榜单</div>
        <div className='sub-title'>List</div>
      </Title>
      <List />
    </div>
  )
})

export default Recommend