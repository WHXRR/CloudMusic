import React, { memo, useState } from 'react'

import { getSearch } from '@/service/search'

import { AutoComplete, Input } from 'antd';

import { SearchStyle } from './style'
import { NavLink, useHistory } from 'react-router-dom';

const SONGS = '单曲'
const ALBUMS = '专辑'
const ARTISTS = '歌手'
const PLAYLISTS = '歌单'

const renderItem = (data, title) => ({
  value: data.name,
  key: data.id,
  title,
  label: (
    <NavLink
      style={{ fontSize: '12px', color: '#000', display: 'flex', alignItems: 'center' }}
      to={`/search/?keyword=${data.name}`}
    >
      {
        title === SONGS && (
          <img
            src={data.al?.picUrl}
            alt=''
            style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover' }}
          />
        )
      }
      {
        (title === ALBUMS || title === ARTISTS) && (
          <img
            src={data?.picUrl}
            alt=''
            style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover' }}
          />
        )
      }
      {
        title === PLAYLISTS && (
          <img
            src={data?.coverImgUrl}
            alt=''
            style={{ width: 30, height: 30, marginRight: 10, objectFit: 'cover' }}
          />
        )
      }
      {data.name}
      {
        data.ar && (
          <span title={data.ar?.map(singer => singer.name)}> - {data.ar?.map(singer => singer.name).join('、')}</span>
        )
      }
      {
        data.artists && (
          <span title={data.artists?.map(singer => singer.name)}> - {data.artists?.map(singer => singer.name).join('、')}</span>
        )
      }
      {
        data.creator && (
          <span title={data.creator?.nickname}> - {data.creator?.nickname}</span>
        )
      }
    </NavLink>
  ),
})

const Search = memo(() => {
  const history = useHistory()

  const [searchData, setSearchData] = useState([]);
  let timer = null
  const handleSearchOption = (val) => {
    if (timer) clearTimeout(timer)
    if (!val) return
    timer = setTimeout(() => {
      Promise.all([getSearch(val, 1), getSearch(val, 10), getSearch(val, 100), getSearch(val, 1000)]).then(
        ([res1, res2, res3, res4]) => {
          setSearchData([
            {
              songs: res1.result.songs || [],
              title: SONGS,
            },
            {
              songs: res2.result.albums || [],
              title: ALBUMS,
            },
            {
              songs: res3.result.artists || [],
              title: ARTISTS,
            },
            {
              songs: res4.result.playlists || [],
              title: PLAYLISTS,
            },
          ])
        }
      )
    }, 700)
  }

  const handleSearch = (value) => {
    handleSearchOption(value)
    if (!value) {
      setSearchData([])
    }
  };

  const onSelect = (value, option) => {
    console.log({ option });
    return
    switch (option.title) {
      case SONGS:
        history.push(`/ discover / songdetail / ${option.key}`)
        break;
      case ALBUMS:
        history.push({
          pathname: `/ discover / albumdetails / ${option.key}`,
        })
        break;
      case ARTISTS:
        history.push(`/ discover / singerdetails / ${option.key} `)
        break;
      case PLAYLISTS:
        history.push(`/ discover / songlistdetails / ${option.key} `)
        break;
      default:
        break;
    }
  };

  const options = searchData.map(item => ({
    label: (
      <div>
        <div>{item.title}</div>
      </div>
    ),
    options: item.songs.map(ele => renderItem(ele, item.title))
  }))

  return (
    <SearchStyle>
      <AutoComplete
        getPopupContainer={() => document.getElementsByClassName('center')[0]}
        dropdownMatchSelectWidth={300}
        style={{ width: '100%' }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search placeholder="单曲/专辑/歌手/歌单" />
      </AutoComplete>
    </SearchStyle>
  )
})

export default Search