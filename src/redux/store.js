/**
 * 相当于 消息代理平台
 * 老式写法 (redux@4.2 之前)
 */

import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

export default store
