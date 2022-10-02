/**
 * * reducer 相当于订阅者, 处理对应的 action
 * * reducer 函数签名: (preState, action) => new State
 * * reducer 是一个纯函数: 输入相同的值，总是会得到相同的结果。比如，数组中的 slice 就是纯函数，但是 splice 就不是。
 */

export const initialState = 100
export default function reducer(state = initialState, action) {
    // 处理各种各样的action
    switch (action.type) {
        case 'addOne':
            return state + 1
        case 'subOne':
            return state - 1
        case 'addMore':
            return state + action.payload
        case 'subMore':
            return state - action.payload
        default:
            // 很重要 第一次为了初始化 state 会执行一次, 此时不满足任何场景
            return state
    }
}
