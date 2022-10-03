import { useParams } from 'react-router-dom'

export default function SearchList() {
    const params = useParams()
    return <div>当前是文章{params.id}</div>
}
