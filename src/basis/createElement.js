import React from 'react';
import ReactDOM from 'react-dom';

// 创建元素
// 参数1. 标签名
// 参数2. 标签属性——对象 { id: 'box' }，没有给 null
// 参数3. 标签内容
const element = React.createElement(
    'h1',
    { id: 'box', className: 'haha' },
    'context'
);
console.log('🚀 → element', element)

// 渲染react元素
// 参数1. 需要渲染的 DOM
// 参数2. 渲染到哪个DOM节点上
ReactDOM.render(element, document.getElementById('root'))