import ReactDOM from 'react-dom'
import './style.css'

const ele = (
    <div style={{ color: 'red', width: '100%', height: 100 }}>style样式</div>
)

const ele1 = <div className="title">style样式</div>

ReactDOM.render(ele, document.getElementById('root'))
ReactDOM.render(ele1, document.getElementById('root'))

/*
 * 1. 行内样式 - style
        像 width/height 等属性，可以省略 px，直接使用 数值 即可
 * 2. 如果是需要使用百分比的单位，此时，继续使用字符串的值即可（比如，"60%"）
        类名 - className【推荐】
 */
