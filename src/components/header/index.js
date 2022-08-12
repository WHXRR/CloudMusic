import React, { memo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { changeDialogVisibleAction, getLoginout } from '../login-dialog/store/actionCreators'

import {
  PoweroffOutlined,
  SearchOutlined,
  UserOutlined,
  VerticalAlignBottomOutlined,
  HighlightOutlined,
  ExclamationCircleOutlined,
  CustomerServiceOutlined,
  TeamOutlined,
  SmileOutlined
} from '@ant-design/icons';
import {
  Dropdown,
  Input,
  Menu,
  Drawer,
  Avatar,
  Modal
} from 'antd';

import { menu } from '@/common/header_menu'
import LoginDialog from '../login-dialog';

import {
  HearderWrapper,
  HeaderStyle
} from './style'

const { confirm } = Modal;

const Header = memo(() => {

  const dispatch = useDispatch()
  const { token, profile } = useSelector(
    state => ({
      token: state.getIn(['login', 'token']),
      profile: state.getIn(['login', 'profile']),
    }),
    shallowEqual
  )

  // 个人菜单
  const otherMenu = [
    {
      key: '5',
      label: (
        <NavLink to='/discover/recommend'>
          发现音乐
        </NavLink>
      ),
      icon: <CustomerServiceOutlined />,
      children: [
        {
          key: 'sub1',
          label: (
            <NavLink to='/discover/recommend'>
              推荐
            </NavLink>
          ),
        },
        {
          key: 'sub2',
          label: (
            <NavLink to={`/discover/rankinglist/${0}`}>
              排行榜
            </NavLink>
          ),
        },
        {
          key: 'sub3',
          label: (
            <NavLink to='/discover/songsheet'>
              歌单
            </NavLink>
          ),
        },
        {
          key: 'sub4',
          label: (
            <NavLink to='/discover/anchorstation'>
              主播电台
            </NavLink>
          ),
        },
        {
          key: 'sub5',
          label: (
            <NavLink to='/discover/singer'>
              歌手
            </NavLink>
          ),
        },
        {
          key: 'sub6',
          label: (
            <NavLink to='/discover/newdisc'>
              新碟上架
            </NavLink>
          ),
        },
      ]
    },
    {
      key: '6',
      label: (
        <NavLink to='/friends'>
          我的朋友
        </NavLink>
      ),
      icon: <TeamOutlined />,
    },
    {
      key: '7',
      label: (
        <NavLink to='/mine'>
          我的音乐
        </NavLink>
      ),
      icon: <SmileOutlined />,
    },
    {
      key: '2',
      label:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
        >
          下载客户端
        </a>,
      icon: <VerticalAlignBottomOutlined />,
    },
    {
      key: '3',
      label:
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
        >
          创作者中心
        </a>,
      icon: <HighlightOutlined />,
    },
    token ? (
      {
        key: '4',
        label: '注销',
        icon: <PoweroffOutlined />,
      }
    ) : (
      {
        key: '1',
        label: '登录',
        icon: <UserOutlined />,
      }
    ),
  ]
  const onClick = ({ key }) => {
    switch (key) {
      case '1':
        dispatch(changeDialogVisibleAction(true))
        break;
      case '4':
        confirm({
          title: '您确定要注销登录吗?',
          icon: <ExclamationCircleOutlined />,
          okText: '确定',
          cancelText: '取消',
          onOk() {
            return new Promise((resolve, reject) => {
              dispatch(getLoginout())
              resolve()
            })
          }
        });
        break;
      default:
        break;
    }
  }
  const [drawerVisible, changeDrawerVisible] = useState(false)

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
      <HearderWrapper id='header' className={height ? 'shadow' : ''}>
        {
          token
            ?
            <Avatar className='pointer' src={profile.avatarUrl} onClick={() => changeDrawerVisible(true)} />
            :
            <Avatar className='pointer' style={{ backgroundColor: '#00badb' }} icon={<UserOutlined />} onClick={() => changeDrawerVisible(true)} />
        }
        <div className='center'>
          <Dropdown overlay={menu} getPopupContainer={() => document.getElementsByClassName('center')[0]}>
            <NavLink className='white' to="/discover">发现音乐</NavLink>
          </Dropdown>
          <NavLink className='white' to="/friends">我的朋友</NavLink>
          <NavLink className='white' to="/mine">我的音乐</NavLink>
        </div>
        <Input
          className='search-ipt'
          placeholder="随便输..."
          suffix={
            <SearchOutlined className='search-icon' />
          }
        />
        <SearchOutlined className='search-icon search-icon-xs pointer' />
      </HearderWrapper>
      <Drawer
        width={300}
        visible={drawerVisible}
        onClose={() => changeDrawerVisible(false)}
        placement='left'
        closable={false}
        bodyStyle={{ padding: '10px 0' }}
      >
        <Menu
          onClick={onClick}
          items={otherMenu}
        />
      </Drawer>
      <LoginDialog />
    </HeaderStyle>
  )
})

export default Header