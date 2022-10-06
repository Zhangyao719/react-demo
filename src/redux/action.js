// * action 相当于发布者 类比 vue 中 actions
import * as TYPES from './constants'

export const addOne = payload => ({ type: TYPES.ADD_ONE, payload })
export const subOne = payload => ({ type: TYPES.SUB_ONE, payload })
export const addMore = payload => ({ type: TYPES.ADD_MORE, payload })
export const subMore = payload => ({ type: TYPES.SUB_MORE, payload })

export const setName = payload => {
    // * 使用 redux-thunk 中间件后, 支持异步处理操作
    // * 返回 一个包含 dispatch 的函数
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch({ type: TYPES.SET_NAME, payload })
        }, 1000)
    }
}
