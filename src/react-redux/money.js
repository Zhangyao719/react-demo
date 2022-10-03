// import Store from './store'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addOne, addMore, subOne, subMore } from '../redux/action'

export default function Son() {
    const dispatch = useDispatch()
    const money = useSelector(state => state.moneyReducer)
    console.log('click1', money)

    const handleMonkey = async action => {
        dispatch(action)

        // ! 注意: 调用完 dispatch 后, 不会立即更新 state。
        // ! 所以此时 获取 state, 还是改变之前的数据
        console.log('click2', money)
    }
    useEffect(() => {
        console.log('watch', money)
    }, [money])
    return (
        <>
            <hr />
            <h2>子组件操作 store</h2>
            <button onClick={handleMonkey.bind(null, addOne(1))}>+1</button>
            <button onClick={handleMonkey.bind(null, subOne(1))}>-1</button>
            <button onClick={handleMonkey.bind(null, addMore(5))}>+5</button>
            <button onClick={handleMonkey.bind(null, subMore(5))}>-5</button>
        </>
    )
}
