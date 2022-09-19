import React from 'react' // 导入 React
import { Component } from 'react' // 只导入 Component
import ReactDOM from 'react-dom'

class Hello extends React.Component {
    render() {
        return <div>Hello Class Component!</div>
    }
}

class Hi extends Component {
    render() {
        return <div>Hi Class Component!</div>
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))
ReactDOM.render(<Hi />, document.getElementById('root'))
