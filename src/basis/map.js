import ReactDOM from 'react-dom'

const songs = [
    { name: '温柔', id: 1 },
    { name: '私奔到月球', id: 2 },
    { name: '倔强', id: 3 }
]

const ele = (
    <div>
        <ul>
            {songs.map(song => (
                <li key={song.id}>{song.name}</li>
            ))}
        </ul>
    </div>
)

ReactDOM.render(ele, document.getElementById('root'))
