// 常量
import * as actionTypes from './constants'
// 网络请求
import * as singerService from '@/service/singer'

// action
export const changeSingerListAction = list => ({
  type: actionTypes.CHANGE_SINGER_LIST,
  list
})

export const changeSingerDetailsAction = details => ({
  type: actionTypes.CHANGE_SINGER_DETAILS,
  details
})

export const changeSingerHotSongAction = hotList => ({
  type: actionTypes.CHANGE_SINGER_HOT_SONG,
  hotList
})

export const changeSingerAlbumAction = album => ({
  type: actionTypes.CHANGE_SINGER_ALBUM,
  album
})

export const changeSingerMvAction = mv => ({
  type: actionTypes.CHANGE_SINGER_MV,
  mv
})

export const changeSingerMvUrlAction = mvUrl => ({
  type: actionTypes.CHANGE_SINGER_MV_URL,
  mvUrl
})

export const changeSingerDescAction = desc => ({
  type: actionTypes.CHANGE_SINGER_DESC,
  desc
})

export const changeSimiSingerAction = simiSinger => ({
  type: actionTypes.CHANGE_SIMI_SINGER,
  simiSinger
})

export const changeTopSingerAction = topSinger => ({
  type: actionTypes.CHANGE_TOP_SINGER,
  topSinger
})

// --------------------------------------------------------network--------------------------------------------------------
export const getSingerListAction = (area, type, initial, limit, offset) => {
  return dispatch => {
    singerService.getSingerList(area, type, initial, limit, offset).then(res => {
      dispatch(changeSingerListAction(res.artists))
    })
  }
}

export const getSingerDetailsAction = (id) => {
  return dispatch => {
    singerService.getSingerDetails(id).then(res => {
      dispatch(changeSingerDetailsAction(res.data))
    })
  }
}

export const getSingerHotSongAction = (id) => {
  return dispatch => {
    singerService.getSingerHotSong(id).then(res => {
      const arr = res.songs.map((item, index) => ({
        index: index + 1,
        ...item
      }))
      dispatch(changeSingerHotSongAction(arr))
    })
  }
}

export const getSingerAlbumAction = (id, limit, offset) => {
  return dispatch => {
    singerService.getSingerAlbum(id, limit, offset).then(res => {
      dispatch(changeSingerAlbumAction(res.hotAlbums))
    })
  }
}

export const getSingerMvAction = (id) => {
  return dispatch => {
    singerService.getSingerMv(id).then(res => {
      dispatch(changeSingerMvAction(res.mvs))
    })
  }
}

export const getSingerMvUrlAction = (id) => {
  return dispatch => {
    singerService.getSingerMvUrl(id).then(res => {
      dispatch(changeSingerMvUrlAction(res.data))
    })
  }
}

export const getSingerDescAction = (id) => {
  return dispatch => {
    singerService.getSingerDesc(id).then(res => {
      dispatch(changeSingerDescAction(res))
    })
  }
}

export const getSimiSingerAction = (id) => {
  return dispatch => {
    singerService.getSimiSinger(id).then(res => {
      dispatch(changeSimiSingerAction(res.artists))
    })
  }
}

export const getTopSingerAction = () => {
  return dispatch => {
    singerService.getTopSinger(5).then(res => {
      dispatch(changeTopSingerAction(res.artists))
    })
  }
}
