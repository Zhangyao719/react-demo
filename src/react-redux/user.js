import { useDispatch } from 'react-redux'
import { setName } from '../redux/action'

export default function User() {
    const dispatch = useDispatch()

    const handleUser = action => {
        dispatch(action)
    }
    return (
        <>
            <hr />
            <h2>子组件操作 user</h2>
            <button onClick={handleUser.bind(null, setName('ls'))}>
                变成ls
            </button>
        </>
    )
}
