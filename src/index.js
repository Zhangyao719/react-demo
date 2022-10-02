import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // step1. 使用 react-redux 包裹 App 并提供 redux store
    <Provider store={store}>
        <App />
    </Provider>
)
