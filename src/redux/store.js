/**
 * * store 相当于消息代理平台
 * * 老式写法 (redux@4.2 之前)
 * * 获取state: store.getState()
 * * 派发reducer: store.dispatch({ type, payload })
 */

import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducer from './reducer'

const store = createStore(reducer, applyMiddleware(logger))

export default store
