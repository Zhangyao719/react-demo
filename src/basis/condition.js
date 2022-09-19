import ReactDOM from 'react-dom'

const isLoding = false
const loadData = () => {
    // * if 语句
    // if (isLoding) {
    //     return <div>加载中...</div>
    // } else {
    //     return <div>加载完成</div>
    // }

    // * 三元表达式
    //   return isLoding ? <div>加载中...</div> : <div>加载完成</div>

    // * 运算符
    return (isLoding && <div>加载中...</div>) || <div>加载完成</div>
}

const element = <div>条件渲染：{loadData()}</div>

ReactDOM.render(element, document.getElementById('root'))
