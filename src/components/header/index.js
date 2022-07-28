import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { SmileTwoTone } from '@ant-design/icons';
import { Dropdown } from 'antd';

import { menu } from '@/common/header_menu'

import {
  HearderWrapper
} from './style'

const Header = memo(() => {
  return (
    <HearderWrapper>
      <SmileTwoTone className='logo' twoToneColor='#fcccde' />
      <div className='right'>
        <Dropdown overlay={menu}>
          <NavLink to="/discover">发现音乐</NavLink>
        </Dropdown>
        <NavLink to="/friends">我的朋友</NavLink>
        <NavLink to="/mine">我的音乐</NavLink>
      </div>
    </HearderWrapper>
  )
})

export default Header