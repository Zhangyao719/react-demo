/**
 * * reducer 相当于订阅者, 处理对应的 action, 类比 vue 中的 mutations
 * * reducer 函数签名: (preState, action) => new State
 * * reducer 是一个纯函数: 输入相同的值，总是会得到相同的结果。比如，数组中的 slice 就是纯函数，但是 splice 就不是。
 * * combineReducers 接收多个 reducer 模块, 在使用时则需要在 useSelector 中返回 state.xxx
 */

import { combineReducers } from 'redux'
import * as TYPES from './constants'

const initialMoney = 100
function moneyReducer(state = initialMoney, action) {
    // console.log(action)
    // 处理各种各样的action
    switch (action.type) {
        case TYPES.ADD_ONE:
            return state + 1
        case TYPES.SUB_ONE:
            return state - 1
        case TYPES.ADD_MORE:
            return state + action.payload
        case TYPES.SUB_MORE:
            return state - action.payload
        default:
            // 很重要 第一次为了初始化 state 会执行一次, 此时不满足任何场景
            return state
    }
}

const initialUser = {
    name: 'zs',
    age: 18
}
function userReducer(state = initialUser, action) {
    if (action.type === TYPES.SET_NAME) {
        return {
            ...state,
            name: action.payload
        }
    }
    return state
}

const rootReducer = combineReducers({
    moneyReducer,
    userReducer
})

export default rootReducer
