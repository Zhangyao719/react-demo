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
                info: '开业大酬宾，全场7折'
            },
            {
                id: 3,
                name: '超级无敌的冰激凌',
                price: 14.2,
                info: '开业大酬宾，全场6折'
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.product.map(item => (
                    <Child key={item.id} {...item} />
                ))}
            </div>
        )
    }
}

class Child extends Component {
    render() {
        const { name, price, info } = this.props
        return (
            <div>
                <span>名字：{name}</span>
                <span>价格：{price}</span>
                <span>信息：{info}</span>
            </div>
        )
    }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
