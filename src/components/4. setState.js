import { Component } from 'react'
import ReactDOM from 'react-dom/client'

class App extends Component {
    state = {
        count: 0,
        list: [1, 2, 3],
        person: {
            name: 'jack',
            age: 18
        }
    }

    // 第一种表现为异步
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state)
    }

    // setState 第一个参数也可以是包含上一次 state 的函数，返回一个state
    // setState 第二个参数可以在数据更新后立即执行
    handleList = () => {
        this.setState(
            preState => {
                return {
                    list: [...preState.list, preState.count]
                }
            },
            () => {
                console.log(this.state)
            }
        )
    }

    // 放入原生事件中时，会表现为同步
    handlePerson = () => {
        // setTimeout 中表现为同步
        setTimeout(() => {
            this.setState({
                person: {
                    ...this.state.person,
                    name: '张三'
                }
            })
            console.log(this.state)
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleCount}>
                    修改count: {this.state.count}
                </button>
                <button onClick={this.handleList}>
                    修改list: {this.state.list[this.state.list.length - 1]}
                </button>
                {/* <button id="person" onClick={this.handlePerson}> */}
                <button id="person">
                    修改person: {this.state.person.name}
                </button>
            </div>
        )
    }

    componentDidMount() {
        // 或者注册原生事件
        document.getElementById('person').onclick = () => {
            this.setState({
                person: {
                    ...this.state.person,
                    name: '张三'
                }
            })
            console.log(this.state)
        }
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

/**
 * * setState 的参数
 * * 参数一（两种）：
 * * - 1. 需要改变的数据；
 * * - 2. 一个包含上一次 state 参数的方法；
 * * 参数二（回调函数）：
 * * - 数据更新后，立即进行处理的方法
 */

/*
 ? setState 到底是同步的还是异步?

 * 1. setState本身并不是一个异步方法，其之所以会表现出一种异步的形式，是因为react框架本身的一个性能优化机制：
 *    React 会将多个 setState 放入队列中，进行合并。其中，对同一种属性的修改会进行覆盖。
 *    也就是说，当执行setState的时候，state中的数据并不会马上更新。
 * 2. setState 如果是在 react 的生命周期中或者是事件处理函数中，表现是异步的
 * 3. setState 如果是在 setTimeout/setInterval 或者原生事件中，表现是同步的
 */
