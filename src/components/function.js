import ReactDOM from 'react-dom'

// 使用普通函数创建组件：
function Hello() {
    return <div>这是我的第一个函数组件!</div>
}

function Button() {
    return <button>按钮</button>
}

// 使用箭头函数创建组件：
const Hi = () => <div>这是我的第三个函数组件!</div>

const element = (
    <div>
        <h1>函数组件</h1>
        <Hello />
        <Button />
        <Hi />
    </div>
)

ReactDOM.render(element, document.getElementById('root'))

/*
 * 函数组件：使用JS的函数或者箭头函数创建的组件
 * - 约定1：函数名称必须以大写字母开头，React 据此区分组件和普通的 HTML
 * - 约定2：函数组件必须有返回值，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null
 */
