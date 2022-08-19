import React, { memo, useCallback, useEffect, useState } from 'react'

import { getSearch } from '@/service/search'

import { Tabs, Input } from 'antd';

import Tab1 from './c-pages/tab-1'
import Tab2 from './c-pages/tab-2'
import Tab3 from './c-pages/tab-3'

import { SearchResultStyle } from './style'

const { TabPane } = Tabs;
const { Search } = Input;

const SearchResult = memo((props) => {

  const [keyword, setKeyword] = useState('')
  const [activeKey, setActiveKey] = useState('1')
  const [loading, setLoading] = useState(false)

  const [searchData, setSearchData] = useState({})
  const handleSearch = useCallback(
    () => {
      if (!keyword) return
      setLoading(true)
      getSearch(keyword, activeKey, 30).then(res => {
        setSearchData(res.result)
        setLoading(false)
      })
    },
    [keyword, activeKey]
  )

  const value = new URLSearchParams(props.location.search).get("keyword");
  useEffect(() => {
    setKeyword(value)
  }, [value])
  const handleValue = e => {
    setKeyword(e.target.value)
  }
  const onSearch = () => {
    handleSearch()
  }

  const onChange = (key) => {
    setActiveKey(key)
  }
  useEffect(() => {
    handleSearch()
  }, [activeKey, handleSearch])

  const handleClick = (data, type) => {
    switch (type) {
      case 1:
        props.history.push(`/discover/songdetail/${data.id}`)
        break;
      case 2:
        props.history.push(`/discover/albumdetails/${data.id}`)
        break;
      case 3:
        props.history.push(`/discover/singerdetails/${data.id}`)
        break;
      case 4:
        props.history.push(`/discover/songlistdetails/${data.id}`)
        break;
      case 5:
        props.history.push(`/discover/dj/${data.id}`)
        break;
      case 7:
        props.history.push(`/user/home/${data.userId}`)
        break;
      default:
        break;
    }
  }

  return (
    <SearchResultStyle>
      <Search
        placeholder="请输入关键字..."
        onSearch={onSearch}
        enterButton
        value={keyword}
        onChange={handleValue}
        style={{ width: '50%', margin: '20px auto', minWidth: 200, display: 'block' }}
      />
      <Tabs
        activeKey={activeKey}
        onChange={onChange}
        centered
      >
        <TabPane tab="单曲" key="1">
          <Tab2
            keyword={keyword}
            type='首单曲'
            count={searchData.songCount}
            data={searchData.songs}
            loading={loading}
            onClick={(item) => handleClick(item, 1)}
          />
        </TabPane>
        <TabPane tab="专辑" key="10">
          <Tab1
            keyword={keyword}
            type='首专辑'
            count={searchData.albumCount}
            data={searchData.albums}
            loading={loading}
            onClick={(item) => handleClick(item, 2)}
          />
        </TabPane>
        <TabPane tab="歌手" key="100">
          <Tab1
            keyword={keyword}
            type='个歌手'
            count={searchData.artistCount}
            data={searchData.artists}
            loading={loading}
            onClick={(item) => handleClick(item, 3)}
          />
        </TabPane>
        <TabPane tab="歌单" key="1000">
          <Tab1
            keyword={keyword}
            type='个歌单'
            count={searchData.playlistCount}
            data={searchData.playlists}
            loading={loading}
            onClick={(item) => handleClick(item, 4)}
          />
        </TabPane>
        <TabPane tab="电台" key="1009">
          <Tab1
            keyword={keyword}
            type='个电台'
            count={searchData.djRadiosCount}
            data={searchData.djRadios}
            loading={loading}
            onClick={(item) => handleClick(item, 5)}
          />
        </TabPane>
        <TabPane tab="视频" key="1014">
          <Tab3
            keyword={keyword}
            type='个视频'
            count={searchData.videoCount}
            data={searchData.videos}
            loading={loading}
            onClick={(item) => handleClick(item, 6)}
          />
        </TabPane>
        <TabPane tab="用户" key="1002">
          <Tab2
            keyword={keyword}
            type='个用户'
            count={searchData.userprofileCount}
            data={searchData.userprofiles}
            loading={loading}
            onClick={(item) => handleClick(item, 7)}
          />
        </TabPane>
      </Tabs>
    </SearchResultStyle>
  )
})

export default SearchResult