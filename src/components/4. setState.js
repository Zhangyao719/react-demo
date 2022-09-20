import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    state = {
        count: 0,
        list: [1, 2, 3],
        person: {
            name: 'jack',
            age: 18
        }
    }
    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state)
    }
    handleList = () => {
        this.setState({
            list: [...this.state.list, this.state.count]
        })
        console.log(this.state)
    }
    handlePerson = () => {
        this.setState({
            person: {
                ...this.state.person,
                name: '张三'
            }
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleCount}>修改count</button>
                <button onClick={this.handleList}>修改list</button>
                <button onClick={this.handlePerson}>修改person</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
