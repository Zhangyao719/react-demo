import Money from './money'
import User from './user'
// import Store from './redux/store'
import { useSelector } from 'react-redux'

function App() {
    const money = useSelector(state => state.moneyReducer)
    const user = useSelector(state => state.userReducer)
    return (
        <div className="App">
            <h1>我是APP根组件</h1>
            <div style={{ marginBottom: 20 }}>redux 现在还有 {money} 块钱</div>
            <Money />
            <br /> <hr />
            <br /> <br />
            <div style={{ marginBottom: 20 }}>user 名字叫： {user.name} </div>
            <User />
        </div>
    )
}

export default App
