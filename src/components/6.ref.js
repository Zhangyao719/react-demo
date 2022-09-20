import { Component, createRef } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    txtRef = createRef()
    state = {
        count: 0,
        list: [1, 2, 3],
        person: {
            name: 'jack',
            age: 18
        }
    }
    handleClick = e => {
        console.log(this.txtRef.current.value)
    }
    render() {
        return (
            <>
                <input
                    type="text"
                    ref={this.txtRef}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>获取文本框的值</button>
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
