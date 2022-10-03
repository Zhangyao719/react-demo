/**
 * * store 相当于消息代理平台
 * * 老式写法 (redux@4.2 之前)
 * * 获取state: store.getState()
 * * 派发reducer: store.dispatch({ type, payload })
 */

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension' //redux devtool 开发工具的配置 (在中间件外面包裹)
import reducer from './reducer'

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk, logger))
)

export default store
