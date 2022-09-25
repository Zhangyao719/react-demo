import { Component } from 'react'
import ReactDOM from 'react-dom/client'

class Modal extends Component {
    render() {
        return (
            <div>
                {this.props.title}
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <>
                <Modal title={<h3>搜索</h3>}>
                    <a href="https://www.baidu.com">百度一下</a>
                </Modal>

                <Modal title={<h3>娱乐</h3>}>
                    <a href="https://www.bilibili.com">干杯</a>
                </Modal>
            </>
        )
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
