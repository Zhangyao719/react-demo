import { useState } from 'react'

export default function SearchTop() {
    const [tops] = useState([
        { id: 1, label: '亚洲排行' },
        { id: 2, label: '欧美排行' },
        { id: 3, label: '抖音排行' }
    ])

    return (
        <div>
            <ul>
                {tops.map(t => (
                    <li key={t.id}>{t.label}</li>
                ))}
            </ul>
        </div>
    )
}
