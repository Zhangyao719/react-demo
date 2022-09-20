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
    handleChange = e => {
        this.setState({
            msg: e.target.value
        })
    }
    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.msg}
                    onChange={this.handleChange}
                />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
