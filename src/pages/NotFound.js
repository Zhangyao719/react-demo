import { NavLink } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            404, 访问页面不存在
            <NavLink to="/" exact>
                返回首页
            </NavLink>
        </div>
    )
}
