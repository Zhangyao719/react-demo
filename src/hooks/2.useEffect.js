import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// 使用普通函数创建组件：
function Count() {
    // 指定依赖
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = count
        console.log('依赖更新, 执行副作用')
    }, [count])

    // // 指定依赖
    // const [position, setPosition] = useState({
    //     pageX: 0,
    //     pageY: 0,
    // })
    // useEffect(() => {
    //     window.addEventListener('mousemove', () => {

    //     })
    //     console.log('')

    //     return () => {

    //     }
    // }, [])

    return (
        <div>
            <span>点击次数：{count}</span>
            <br />
            <button onClick={setCount.bind(this, count + 1)}>+1</button>
            {/* <br />
            <span>名字：{info.name}</span>
            <br />
            <button onClick={motifyName}>改名</button> */}
        </div>
    )
}

ReactDOM.render(<Count />, document.getElementById('root'))

/*
 * - useEffect: 进行出渲染外的其他操作

 * - 参数：
 *    1. 事件处理的回调函数；
 *    2. 依赖（可选），可以指定某些依赖，等依赖的数据改变时，才去执行对应的副作用。

 * - 返回值：可以返回一个 清理函数, 在里面执行 解绑 window 的事件、清理定时器等清理操作

* - 执行时机有三种情况：
    * 1. 组件渲染后会执行，相当于 componentDidMount + componentDidUpdate；
    * 2. 当有依赖时，只在对应依赖变更后，才执行；
    * 3. 当依赖为 空数组[] 时，仅会执行一次，相当于 componentDidMount。

* - 清理函数的执行时机：
    * 1. 在组件卸载时以及下一次副作用回调函数调用的时候执行，用于清除上一次的副作用。
    * 2. 当依赖为 空数组[] 时，会在组件卸载时会执行。相当于组件的 componetWillUnmount。
*/
