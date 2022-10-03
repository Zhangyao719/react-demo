import { NavLink, Route, Switch } from 'react-router-dom'
import Item from './components/CommentItem'

export default function Comment() {
    return (
        <div>
            评论页面
            <ul>
                <li>
                    <NavLink to="/comment/1">查看评论1</NavLink>
                </li>
                <li>
                    <NavLink to="/comment/2">查看评论2</NavLink>
                </li>
                <li>
                    <NavLink to="/comment/3">查看评论3</NavLink>
                </li>
            </ul>
            <br />
            <Switch>
                <Route path="/comment/:id" component={Item} />
            </Switch>
        </div>
    )
}
