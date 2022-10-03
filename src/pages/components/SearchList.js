import { useState } from 'react'

export default function SearchList() {
    const [list] = useState([
        { id: 1, label: '电台歌单' },
        { id: 2, label: 'DJ歌单' },
        { id: 3, label: '入睡歌单' }
    ])
    return (
        <div>
            <ul>
                {list.map(l => (
                    <li key={l.id}>{l.label}</li>
                ))}
            </ul>
        </div>
    )
}
