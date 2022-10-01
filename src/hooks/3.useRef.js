import { useRef, Component } from 'react'
import ReactDOM from 'react-dom'

// 使用普通函数创建组件：
function DemoFn() {
    // ?
    const sayHi = () => {
        console.log('hello function')
    }
    return <div>Demo 函数子组件</div>
}

class DemoClass extends Component {
    sayHi() {
        console.log('hello class')
    }
    render() {
        return <div>Demo class 子组件</div>
    }
}

function App() {
    const ref = useRef(null)
    const onClick = () => {
        console.log(ref.current.sayHi())
    }
    return (
        <>
            {/* <input ref={ref} type="text" /> */}
            {/* <DemoFn ref={ref} /> */}
            <DemoClass ref={ref} />
            <button onClick={onClick}>获取ref</button>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

/**
 * * useRef 操作DOM
 * * 只有类组件可以使用ref, 子组件如果是函数组件则无法使用
 */
