import React, { memo } from 'react'

import TopBanners from './c-cpns/top-banners'
import Hot from './c-cpns/hot'
import NewDisc from './c-cpns/new-disc'
import List from './c-cpns/list'
import LookMore from '@/components/look-more'

import { Title, GreyBG, Container } from './style'

const Recommend = memo((props) => {
  return (
    <div>
      <TopBanners />
      <Container>
        <Title>
          <div className='top-title'>热门推荐</div>
          <div className='sub-title'>Popular Recommendations</div>
        </Title>
        <Hot {...props} />
        <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
      </Container>
      <GreyBG>
        <Container>
          <Title>
            <div className='top-title'>新碟上架</div>
            <div className='sub-title'>New disc on shelves</div>
          </Title>
          <NewDisc {...props} />
          <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
        </Container>
      </GreyBG>
      <Container>
        <Title>
          <div className='top-title'>榜单</div>
          <div className='sub-title'>List</div>
        </Title>
        <List {...props} />
        <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
      </Container>
    </div>
  )
})

export default Recommend