import React, { memo } from 'react'

import TopBanners from './c-cpns/top-banners'
import Hot from './c-cpns/hot'
import NewDisc from './c-cpns/new-disc'
import List from './c-cpns/list'
import FillText from '@/components/fill-text'

import { RightCircleFilled } from '@ant-design/icons'

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
          <FillText style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s'>
            查看更多<RightCircleFilled style={{ marginLeft: '5px' }} />
          </FillText>
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
            <FillText style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s'>
              查看更多<RightCircleFilled style={{ marginLeft: '5px' }} />
            </FillText>
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
          <FillText style={{ paddingTop: '50px' }} fontSize='16px' speed='.6s'>
            查看更多<RightCircleFilled style={{ marginLeft: '5px' }} />
          </FillText>
        </NavLink>
      </Container>
    </div>
  )
})

export default Recommend