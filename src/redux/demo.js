import Store from './store'
import { addOne, addMore, subOne, subMore } from './action'

export default function ReduxDemo() {
    const handleMonkey = action => {
        Store.dispatch(action)
        console.log('🚀 → Store', Store.getState())
    }
    return (
        <>
            <hr />
            <h2>子组件操作 store</h2>
            <button onClick={handleMonkey.bind(this, addOne(1))}>+1</button>
            <button onClick={handleMonkey.bind(this, subOne(1))}>-1</button>
            <button onClick={handleMonkey.bind(this, addMore(5))}>+5</button>
            <button onClick={handleMonkey.bind(this, subMore(5))}>-5</button>
        </>
    )
}
