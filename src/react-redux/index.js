import Son from './son'
// import Store from './redux/store'
import { useSelector } from 'react-redux'

function App() {
    const state = useSelector(state => state)
    return (
        <div className="App">
            <h1>我是APP根组件</h1>
            <div style={{ marginBottom: 20 }}>redux 现在还有 {state}</div>
            <Son />
        </div>
    )
}

export default App
