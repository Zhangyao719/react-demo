import ReactDOM from 'react-dom'
import React from 'react' // 17以及之后的版本可以不需要手动导入 react

// 支持直接创建元素
const title = <h1 title="哈哈">呵呵</h1>

// <></> 幽灵节点
const title1 = <>
    <h1 title="哈哈">呵呵</h1>
</>

// <React.Fragment> 片段
const title2 = <React.Fragment>
    <h1 title="哈哈">呵呵</h1>
</React.Fragment>

// 渲染元素
ReactDOM.render(title, document.getElementById('root'))

/**
 * * 1. 需要根节点 <></> 或 <React.Fragment>
 * * 2. 需要 () 包裹
 * * 3. className 替换 class，htmlfor 替换 for
 */