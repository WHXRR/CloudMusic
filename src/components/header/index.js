import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { SmileTwoTone } from '@ant-design/icons';
import { Dropdown, Input } from 'antd';

import { menu } from '@/common/header_menu'

import {
  HearderWrapper,
  HeaderStyle
} from './style'

const { Search } = Input;

const Header = memo(() => {
  let [height, changeHeight] = useState(0)
  const bindHandleScroll = (event) => {
    const scrollTop = event.srcElement.documentElement.scrollTop
      || window.pageYOffset
      || event.srcElement.body.scrollTop;
    changeHeight(() => height = scrollTop)
  }
  window.addEventListener('scroll', bindHandleScroll)

  return (
    <HeaderStyle>
      <HearderWrapper className={height ? 'shadow' : ''}>
        <SmileTwoTone className='logo' twoToneColor='#00badb' />
        <div className='center'>
          <Dropdown overlay={menu}>
            <NavLink to="/discover">发现音乐</NavLink>
          </Dropdown>
          <NavLink to="/friends">我的朋友</NavLink>
          <NavLink to="/mine">我的音乐</NavLink>
        </div>
        <Search className='search-ipt' placeholder="请输入" enterButton />
      </HearderWrapper>
    </HeaderStyle>
  )
})

export default Header