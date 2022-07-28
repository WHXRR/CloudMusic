import * as actionTypes from './constants'

const defaultState = {
  banner: []
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNER:
      return { ...state, banner: [] }
    default:
      return state
  }
}

export default reducer