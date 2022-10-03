import { useState } from 'react'

export default function SearchStar() {
    const [stars] = useState([
        { id: 1, label: '发如雪' },
        { id: 2, label: '谪居' },
        { id: 3, label: '空山新雨后' }
    ])
    return (
        <div>
            <ul>
                {stars.map(s => (
                    <li key={s.id}>{s.label}</li>
                ))}
            </ul>
        </div>
    )
}
