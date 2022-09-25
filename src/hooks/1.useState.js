import { useState } from 'react'
import ReactDOM from 'react-dom'

// 使用普通函数创建组件：
function Count() {
    // 简单数据类型
    const [count, setCount] = useState(0)
    const add = num => {
        setCount(count + num)
    }

    // 引用类型
    const [info, setName] = useState({ name: '张三' })
    const motifyName = () => {
        setName({
            ...info,
            name: ['李四', '王五', '赵六'][(Math.random() * 3) | 0]
        })
    }

    // 函数
    const [songs, setSong] = useState(() => {
        const arr = []
        ;((Math.random() * 10) | 0) % 2 === 0
            ? arr.push('双截棍', '四截棍')
            : arr.push('单节棍', '三节棍')
        return arr
    })
    const motifySong = list => {
        setSong([...songs, ...list])
    }

    return (
        <div>
            <span>值：{count}</span>
            <br />
            <button onClick={add.bind(this, 1)}>+1</button>
            <br />
            <span>名字：{info.name}</span>
            <br />
            <button onClick={motifyName}>改名</button>
            <br />
            <span>
                音乐：
                {songs.map((song, index) => (
                    <li key={index}>{song}</li>
                ))}
            </span>
            <br />
            <button onClick={motifySong.bind(this, ['多结棍'])}>
                添加歌名
            </button>
        </div>
    )
}

ReactDOM.render(<Count />, document.getElementById('root'))

/*
 * - hooks 只能在函数组件中使用

 * - useState 的参数：默认值 或 返回默认值的函数

 * - useState 返回带有两个值的元组：
    * 1. 当前的数据
    * 2. 修改数据的方法(接受新的值，替换老的)
    ! 3. 不能直接修改旧状态，尤其是引用类型，应该用新的状态替换旧状态。

* - 更新过程
    * 1. 函数组件没有生命周期；
    * 2. 组件第一次渲染 会从头开始执行该组件中的代码逻辑；
    * 3. 组件第二次渲染 useState 会拿到最新的状态值而非初始值；
    * 4. useState 的参数也可以是函数，当初始值需要计算得来时，可以写在 useState 回调里，而不是写在外面，
    * 这样就避免了每次执行函数组件，都会重复计算初始值的情况（参考3，重复计算也不会使用，浪费性能）。
*/
