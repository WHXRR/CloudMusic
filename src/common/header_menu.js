import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'

export const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <NavLink to='/discover/recommend'>
            推荐
          </NavLink>
        ),
      },
      {
        key: '2',
        label: (
          <NavLink to='/discover/rankinglist'>
            排行榜
          </NavLink>
        ),
      },
      {
        key: '3',
        label: (
          <NavLink to='/discover/songsheet'>
            歌单
          </NavLink>
        ),
      },
      {
        key: '4',
        label: (
          <NavLink to='/discover/anchorstation'>
            主播电台
          </NavLink>
        ),
      },
      {
        key: '5',
        label: (
          <NavLink to='/discover/singer'>
            歌手
          </NavLink>
        ),
      },
      {
        key: '6',
        label: (
          <NavLink to='/discover/newdisc'>
            新碟上架
          </NavLink>
        ),
      },
    ]}
  />
)