// 常量
import * as actionTypes from './constants'
// 网络请求
import * as recommendService from '@/service/recommend'

// action
export const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  banners: res.banners
})

export const changeHotRecommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommend: res.result
})

export const changeNewDiscAction = res => ({
  type: actionTypes.CHANGE_NEW_DISC,
  newDisc: [res.albums.slice(0, 5), res.albums.slice(5, 10)]
})

export const changeList1Action = list => ({
  type: actionTypes.CHANGE_LISTS,
  list
})

export const changeListLoadingAction = (res) => ({
  type: actionTypes.CHANGE_LISTS_LOADING,
  data: res
})

// network
export const getBannersAction = () => {
  return dispatch => {
    recommendService.getBanners().then(res => {
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = () => {
  return dispatch => {
    recommendService.getHotRecommend(9).then(res => {
      dispatch(changeHotRecommendAction(res))
    })
  }
}

export const getNewDiscAction = () => {
  return dispatch => {
    recommendService.getNewDisc().then(res => {
      dispatch(changeNewDiscAction(res))
    })
  }
}

export const getListsAction = () => {
  return async dispatch => {
    const allLists = await recommendService.getAllLists()
    Promise.all([
      recommendService.getListDetails(allLists.list[0].id, 10),
      recommendService.getListDetails(allLists.list[1].id, 10),
      recommendService.getListDetails(allLists.list[2].id, 10),
      recommendService.getListDetails(allLists.list[3].id, 10),
    ]).then(([list1, list2, list3, list4]) => {
      const arr = [
        {
          id: allLists.list[0].id,
          name: allLists.list[0].name,
          img: allLists.list[0].coverImgUrl,
          songs: list1.songs
        },
        {
          id: allLists.list[1].id,
          name: allLists.list[1].name,
          img: allLists.list[1].coverImgUrl,
          songs: list2.songs
        },
        {
          id: allLists.list[2].id,
          name: allLists.list[2].name,
          img: allLists.list[2].coverImgUrl,
          songs: list3.songs
        },
        {
          id: allLists.list[3].id,
          name: allLists.list[3].name,
          img: allLists.list[3].coverImgUrl,
          songs: list4.songs
        }
      ]
      dispatch(changeList1Action(arr))
      dispatch(changeListLoadingAction(false))
    })
  }
}