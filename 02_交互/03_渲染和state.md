请求和提供UI的过程：
1. 触发一次渲染
2. 渲染组件
3. 提交到DOM

1. 触发一次渲染
导致组件渲染：组件的初次渲染、组件(或父组件)的状态发生改变
初次渲染：
```js
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
状态更新时重新渲染:一旦组件被初次渲染，可以用set函数更新其状态来触发之后的渲染

2. 渲染组件
+ 在进行初次渲染时, React 会调用根组件。
+ 对于后续的渲染, React 会调用内部状态更新触发了渲染的函数组件。

3. 提交到DOM
+ 对于初次渲染， React 会使用 appendChild() DOM API 将其创建的所有 DOM 节点放在屏幕上。
+ 对于重渲染， React 将应用最少的必要操作（在渲染时计算！），以使得 DOM 与最新的渲染输出相互匹配。
React 仅在渲染之间存在差异时才会更改 DOM 节点


### state 快照问题
一个state变量的值永远不会在一次渲染的内部发生变化，即使其事件处理的代码是异步的。在那次渲染的onClick内部，number值在调用setNumber（number+1）仍然是0
React会使state的值始终固定在一次渲染的各个事件处理函数内部，无需担心代码运行时state是否发生了变化

设置 state 请求一次新的渲染。
React 将 state 存储在组件之外，就像在架子上一样。
当你调用 useState 时，React 会为你提供该次渲染 的一张 state 快照。
变量和事件处理函数不会在重渲染中“存活”。每个渲染都有自己的事件处理函数。
每个渲染（以及其中的函数）始终“看到”的是 React 提供给这个 渲染的 state 快照。
你可以在心中替换事件处理函数中的 state，类似于替换渲染的 JSX。
过去创建的事件处理函数拥有的是创建它们的那次渲染中的 state 值。

### 批处理
设置 state 不会更改现有渲染中的变量，但会请求一次新的渲染。
react会等到事件处理函数中的所有代码都运行完毕再处理state更新
这让你可以更新多个state变量甚至来自多个组件的state变量，而不会触发太多的重新渲染。这意味着只有在事件处理函数执行完之后，ui才会更新，这种特性是*批处理*
```js
      <button onClick={() => {
        setNumber(number + 5);   // n=0 return 5
        setNumber(n => n + 1);   // n=5 return 6
        setNumber(42);           // n=6 return 42
      }}>增加数字</button>
      // 永远只会setNumber(42)，因为state的【批处理特性
```
要在一个事件中多次更新某些 state，你可以使用 setNumber(n => n + 1) 更新函数。

### 局部mutation
```js
onPointerMove={e => {
  setPosition({   // 通常使用 setPosition，这在告诉react：使用这个新的对象替换position的值，然后再次渲染这个组件
    x: e.clientX,
    y: e.clientY
  });
}}
```

使用展开语法复制对象
对于大型表单，所有数据都存放在同一个对象中是非常方便的
```js
const [person, setPerson] = useState({
  ...key,  // 展开语法是浅拷贝
  key1: value1,
})
```

更新一个嵌套对象
```js
const [person, setPerson] = useState({
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
    image: 'https://i.imgur.com/Sd1AgUOm.jpg',
  }
});
```
但是在react中，需要将变量视为不可变的，需要创建一个新的person对象或写成一个函数调用
```js
// 写成一个函数调用
setPerson({
  ...person,
  artwork:{
    ...person.artwork,
    city:'Beijing'
  }
})
```

使用immer将多层的嵌套扁平化,它不会覆盖之前的state
1. 运行 npm install use-immer 添加 Immer 依赖
2. 用 import { useImmer } from 'use-immer' 替换掉 import { useState } from 'react'
```js
updatePerson(draft => {
  draft.artwork.city='new city'
})
// 
```

当然，更新state中的数组也需要像对象一样，更新数组使用filter()和map()等生成新数组
添加元素	push，unshift -->	concat，[...arr] 展开语法（例子）
删除元素	pop，shift，splice --> qfilter，slice（例子）
替换元素	splice，arr[i] = ... 赋值 -->	map（例子）
排序	reverse，sort	--> 先将数组复制一份（例子）
或者使用immer
```js
<button onClick={()=>
  setArtists(  // 替换state 传入一个新数组
    [
    ...artists,  // 新数组包含原数组的所有元素
    {id:nextId++,name:name}  // 在新数组末尾追加一个新元素，新元素为{}
  ]
  )}>Add a li</button>
```



