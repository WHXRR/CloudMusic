import React from 'react'
import { Redirect } from 'react-router-dom'

import DisCover from '@/pages/discover'
import Recommend from '@/pages/discover/c-pages/recommend'
import RankingList from '@/pages/discover/c-pages/ranking-list'
import SongSheet from '@/pages/discover/c-pages/song-sheet'
import AnchorStation from '@/pages/discover/c-pages/anchor-station'
import Singer from '@/pages/discover/c-pages/singer'
import NewDisc from '@/pages/discover/c-pages/new-disc'
import SongDetail from '@/pages/discover/c-pages/song-detail'
import DJDetails from '@/pages/discover/c-pages/anchor-station/c-pages/dj-details'
import SongListDetails from '@/pages/discover/c-pages/song-list-details'
import AlbumDetails from '@/pages/discover/c-pages/album-details'
import SingerDetails from '@/pages/discover/c-pages/singer/c-pages/singer-details'

import Mine from '@/pages/mine'
import Friends from '@/pages/friends'

import Profile from '../pages/profile'

const routes = [
  {
    path: '/',
    exact: true,
    render() {
      return <Redirect to={'/discover'} />
    },
  },
  {
    path: '/discover',
    component: DisCover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'} />
      },
      {
        path: '/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/rankinglist/:id',
        component: RankingList
      },
      {
        path: '/discover/songsheet',
        component: SongSheet
      },
      {
        path: '/discover/anchorstation',
        component: AnchorStation
      },
      {
        path: '/discover/dj/:id',
        component: DJDetails
      },
      {
        path: '/discover/singer',
        component: Singer
      },
      {
        path: '/discover/newdisc',
        component: NewDisc
      },
      {
        path: '/discover/songdetail/:id',
        component: SongDetail
      },
      {
        path: '/discover/songlistdetails/:id',
        component: SongListDetails
      },
      {
        path: '/discover/albumdetails/:id',
        component: AlbumDetails
      },
      {
        path: '/discover/singerdetails/:id',
        component: SingerDetails
      },
    ]
  },
  {
    path: '/friends',
    component: Friends
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/user/home/:id',
    component: Profile
  }
]
export default routes