import { useState, createContext } from 'react'
import ReactDOM from 'react-dom'
import Son from './4.useContext-son'

// 创建 Context 组件(可以放在 App 顶层)
export const Context = createContext()

function App() {
    const [count, setCount] = useState(123)
    return (
        <Context.Provider value={{ count, setCount }}>
            <Son />
        </Context.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

/**
 * * 1. 需要使用 createContext 先创建 Context;
 * * 2. 通过 Context.Provider 包裹子组件, 并提供 value 值;
 * * 3. 子组件 使用 钩子 ——> useContext, 并传入 创建的 Context;
 * * 4. 子组件 直接使用 useContext 返回的 value 值。
 */
