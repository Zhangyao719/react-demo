// action 相当于发布者
import * as TYPES from './constants'

export const addOne = payload => ({ type: TYPES.ADD_ONE, payload })
export const subOne = payload => ({ type: TYPES.SUB_ONE, payload })
export const addMore = payload => ({ type: TYPES.ADD_MORE, payload })
export const subMore = payload => ({ type: TYPES.SUB_MORE, payload })
export const setName = payload => ({ type: TYPES.SET_NAME, payload })
