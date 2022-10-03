import { NavLink, Route, Switch, useHistory } from 'react-router-dom'
import SearchList from './components/SearchList'
import SearchStar from './components/SearchStar'
import SearchTop from './components/SearchTop'

export default function Search() {
    const history = useHistory()
    const routerPush = () => {
        history.push('/')
    }
    const routerGo = () => {
        history.go(-1)
    }
    const routerReplace = () => {
        history.replace('/comment')
    }
    return (
        <div>
            搜索页面
            <ul>
                <li>
                    <NavLink to="/search/top">排行榜</NavLink> ----{' '}
                    <button onClick={routerPush}>push 跳转回首页</button>
                </li>
                <li>
                    <NavLink to="/search/list">歌单</NavLink> ----{' '}
                    <button onClick={routerGo}>go 返回上一页</button>
                </li>
                <li>
                    <NavLink to="/search/star">收藏</NavLink> ----{' '}
                    <button onClick={routerReplace}>
                        replace 跳转去评论页
                    </button>
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
