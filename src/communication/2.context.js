import { Component, createContext } from 'react'
import ReactDOM from 'react-dom'

// 1 创建 Context 对象
const { Provider, Consumer } = createContext()

class App1 extends Component {
    state = {
        money: 100,
        name: '张三',
        age: 18
    }
    render() {
        return (
            <Provider
                value={{
                    ...this.state
                }}
            >
                <h1>根组件</h1>
                <Father></Father>
            </Provider>
        )
    }
}
class Father extends Component {
    render() {
        return (
            <>
                <h2>父组件</h2>
                <Son></Son>
            </>
        )
    }
}
class Son extends Component {
    render() {
        return (
            <Consumer>
                {inject => {
                    return (
                        <h3>
                            子组件
                            <br />
                            <span>{inject.name}</span>
                            <span>{inject.age}</span>
                            <span>{inject.money}</span>
                        </h3>
                    )
                }}
            </Consumer>
        )
    }
}

ReactDOM.render(<App1 />, document.getElementById('root'))
