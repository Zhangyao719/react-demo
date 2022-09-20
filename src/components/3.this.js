import { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    state = {
        msg: 'hello react'
    }
    handleClick() {
        console.log(this.state.msg)
    }
    onClick = () => {
        console.log(this.state.msg)
    }
    render() {
        return (
            <div>
                <button onClick={e => this.handleClick(e)}>点我</button>
                <button onClick={this.handleClick.bind(this)}>点我</button>
                <button onClick={this.onClick}>点我</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
