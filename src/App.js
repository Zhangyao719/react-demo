import '@/assets/style/base.scss'
import './App.css'
// import App from './react-redux/index'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from 'react-router-dom'
import Home from './pages/Home'
import Comment from './pages/Comment'
import Search from './pages/Search'
import NotFound from './pages/NotFound'

function App() {
    return (
        <Router>
            <ul>
                <li>
                    {/* exact 精准匹配*/}
                    <NavLink to="/" exact>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/comment">评论</NavLink>
                </li>
                <li>
                    <NavLink to="/search">搜索</NavLink>
                </li>
            </ul>
            <br /> <hr /> <br />
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/comment" component={Comment}></Route>
                <Route path="/search" component={Search}></Route>
                {/* 不写 path 无条件渲染 兜底 404 放在最后面 */}
                <Route component={NotFound}></Route>
            </Switch>
        </Router>
    )
}

export default App
