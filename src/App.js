import '@/assets/style/base.scss'
import './App.css'
import ReduxDemo from './redux/demo'
import Store from './redux/store'

function App() {
    const state = Store.getState()
    return (
        <div className="App">
            <h1>我是APP根组件</h1>
            <div style={{ marginBottom: 20 }}>redux 现在还有 {state}</div>
            <ReduxDemo />
        </div>
    )
}

export default App
