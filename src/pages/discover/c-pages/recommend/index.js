import React, { memo } from 'react'

import TopBanners from './c-cpns/top-banners'
import Hot from './c-cpns/hot'
import NewDisc from './c-cpns/new-disc'
import List from './c-cpns/list'
import LookMore from '@/components/look-more'

import { Title, GreyBG, Container } from './style'
import { NavLink } from 'react-router-dom'

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
        <NavLink to='/discover/songsheet'>
          <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
        </NavLink>
      </Container>
      <GreyBG>
        <Container>
          <Title>
            <div className='top-title'>新碟上架</div>
            <div className='sub-title'>New disc on shelves</div>
          </Title>
          <NewDisc {...props} />
        <NavLink to='/discover/newdisc'>
          <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
        </NavLink>
        </Container>
      </GreyBG>
      <Container>
        <Title>
          <div className='top-title'>榜单</div>
          <div className='sub-title'>List</div>
        </Title>
        <List {...props} />
        <NavLink to='/discover/rankinglist'>
          <LookMore style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s' />
        </NavLink>
      </Container>
    </div>
  )
})

export default Recommend