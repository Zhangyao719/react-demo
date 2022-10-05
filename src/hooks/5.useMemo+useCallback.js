import { useEffect, useState, useMemo, useCallback } from 'react'

function Child({ data, callBack }) {
    useEffect(() => {
        console.log('触发父组件传递来的数据：', data)
    }, [data])

    useEffect(() => {
        callBack()
    }, [callBack])

    return <div>子组件</div>
}

function App() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [kw, setKw] = useState('')

    // * 使用 useMemo 解决数据重复渲染的问题
    // const data = { name, phone }
    const data = useMemo(() => ({ name, phone }), [name, phone])

    // * 使用 useCallback 解决函数的非必要渲染
    // const callBack = () => {
    //     console.log('触发父组件回调')
    // }
    const callBack = useCallback(() => {
        console.log('触发父组件回调')
    }, [])

    return (
        <div className="App">
            <input
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="请输入姓名"
            />
            <input
                onChange={e => setPhone(e.target.value)}
                type="text"
                placeholder="请输入电话"
            />
            <input
                onChange={e => setKw(e.target.value)}
                type="text"
                placeholder="请输入关键词"
            />
            <Child data={data} callBack={callBack} />
        </div>
    )
}

export default App

/**
 * * 现象: 父组件传递给组件的数据(包括函数), 会存在重复渲染的问题。
 * * 原因:
 * * - 1. 函数组件会在数据更新后会重新渲染, 所以传递给子组件的 props 会重新执行
 * * - 2. 代码执行只和顺序有关, 与代码内的具体内容无关。
 * * 解决方法：
 * * 父组件传递的数据可以使用以下两个 hooks 进行包裹：
 * * 1. useMemo 包裹数据
 * *    https://zh-hans.reactjs.org/docs/hooks-reference.html#usememo
 * * 2. useCallback 包裹函数
 * *    useCallback(fn, deps) 相当于 useMemo(() => fn, deps)。
 * *    https://zh-hans.reactjs.org/docs/hooks-reference.html#usecallback
 */
