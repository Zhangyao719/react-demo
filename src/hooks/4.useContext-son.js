import { useContext } from 'react'
import { Context } from './4.useContext-father'

export default function Son() {
    const ctx = useContext(Context)
    return <div>子组件接收 --- {ctx.count}</div>
}
