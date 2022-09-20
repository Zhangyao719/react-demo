import { Component } from 'react'
import ReactDOM from 'react-dom'

class Parent extends Component {
    state = {
        product: [
            {
                id: 1,
                name: '超级好吃的棒棒糖',
                price: 18.8,
                info: '开业大酬宾，全场8折'
            },
            {
                id: 2,
                name: '超级好吃的大鸡腿',
                price: 34.2,
                info: '开业大酬宾，全场8折'
            },
            {
                id: 3,
                name: '超级无敌的冰激凌',
                price: 14.2,
                info: '开业大酬宾，全场8折'
            }
        ]
    }
    handleDiscount = (discd, id) => {
        this.setState({
            product: this.state.product.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        price: (item.price - discd).toFixed(2)
                    }
                }
                return item
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.product.map(item => (
                    <Child
                        key={item.id}
                        {...item}
                        handleDiscount={this.handleDiscount}
                    />
                ))}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        const { name, price, info, handleDiscount, id } = this.props
        return (
            <div>
                <span>名字：{name}</span>
                <span>价格：{price}</span>
                <span>信息：{info}</span>
                <button
                    onClick={() => {
                        handleDiscount(1, id)
                    }}
                >
                    砍一刀
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'))

/**
 * * 父传子：传递属性，通过props接收 （包括简单数据类型、复杂数据类型、函数、一段结构）
 * * 子传父
 * * - 1. 父组件注册并传递处理函数
 * * - 2. 调用父组件传过来的函数，并向其中注入参数。
 */
