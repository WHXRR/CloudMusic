// 常量
import * as actionTypes from './constants'
// 网络请求
import * as songListService from '@/service/songList'

// action
export const changeCatListAction = catList => ({
  type: actionTypes.CHANGE_CAT_LIST,
  catList
})

export const changeSongListAction = songList => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList
})

export const changeSongListTotalAction = total => ({
  type: actionTypes.CHANGE_SONG_LIST_TOTAL,
  total
})

// --------------------------------------------------------network--------------------------------------------------------
export const getBannersAction = () => {
  return dispatch => {
    songListService.getSongListCatList().then(res => {
      const arr = []
      arr.push({
        name: '全部',
        sub: [
          {
            name: '全部歌单'
          }
        ]
      })
      const categories = Object.values(res.categories)
      categories.forEach((item, idx) => {
        const subCate = {}
        subCate.name = item
        subCate.sub = res.sub.filter(ele => ele.category === idx)
        arr.push(subCate)
      })
      dispatch(changeCatListAction(arr))
    })
  }
}

export const getSongListAction = (cat, limit, offset) => {
  return dispatch => {
    songListService.getSongList(cat, limit, offset).then(res => {
      dispatch(changeSongListAction(res.playlists))
      dispatch(changeSongListTotalAction(res.total))
    })
  }
}
