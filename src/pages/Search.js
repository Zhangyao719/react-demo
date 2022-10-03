import { NavLink, Route, Switch } from 'react-router-dom'
import SearchList from './components/SearchList'
import SearchStar from './components/SearchStar'
import SearchTop from './components/SearchTop'

export default function Search() {
    return (
        <div>
            搜索页面
            <ul>
                <li>
                    <NavLink to="/search/top">排行榜</NavLink>
                </li>
                <li>
                    <NavLink to="/search/list">歌单</NavLink>
                </li>
                <li>
                    <NavLink to="/search/star">收藏</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/search/top" component={SearchTop}></Route>
                <Route path="/search/list" component={SearchList}></Route>
                <Route path="/search/star" component={SearchStar}></Route>
            </Switch>
        </div>
    )
}

/**
 * * 嵌套路由
 * * 1. 在父组件内部, 继续使用 Route 进行嵌套；
 * * 2. path 必须写完整 (前面带上完整的父路由)。
 */
