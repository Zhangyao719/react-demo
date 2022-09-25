import { Component } from 'react'
import ReactDOM from 'react-dom/client'
import PropTypes from 'prop-types'

class Modal extends Component {
    // props 校验
    static propTypes = {
        color: PropTypes.string,
        isAdmin: PropTypes.bool.isRequired,
        userInfo: PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        }).isRequired
    }
    // props 默认值
    static defaultProps = {
        color: 'pink'
    }
    render() {
        const {
            color,
            isAdmin,
            userInfo: { name, age }
        } = this.props
        return (
            <div style={{ color }}>
                <span>姓名：{name}</span>
                <br />
                <span>年龄：{age}</span>
                <br />
                <span>是否超管：{isAdmin ? '是' : '否'}</span>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <Modal
                color={'skyblue'}
                isAdmin={true}
                userInfo={{
                    name: '张三',
                    age: 18
                }}
            />
        )
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
