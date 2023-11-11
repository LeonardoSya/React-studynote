### 组件：可以任意添加标签的js函数
建议*在一个文件中只导出一个组件，再从另一个文件中导入该组件*

### JSX
JSX规则：
1. 只能返回一个根元素。
<></> 这个空标签被称作 Fragment 它不会再html结构中添加额外节点
2. 标签必须闭合 <img>这样的自闭合标签必须写成<img />

JSX的大括号内可以编写JavaScript:
+ 单/双引号传递字符串：`src="https://xxx.com/xxx.jpg"`
+ {}动态地指定值: `src={avatar}`
注意： `className="avatar"`指定了*CSS类名*，`src={avatar}`会读取js中某变量的值
大括号内的任何js表达式都能运行，包括函数调用
```js
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'zh-CN',
        {weekday: 'long'}
    ).format(date)
}

export default function TodoList() {
    return (
        <h1>To Do List for {formatDate(today)} </h1>
    )
}
```
+ 在哪使用大括号：
 + JSX标签内文本 `<h1>{name}</h1>`
 + 紧跟在 = 符号后的*属性*： `src={avatar}`会读取avatar变量，但是`src="{avatar}"`只会传递字符串{avatar}
+ 双大括号 用于传递对象 `person={{...}}` 


### props
组件使用props进行组件间通讯，每个父组件都可以通过为子组件提供props的方式来传递信息

props是传递给JSX标签的信息，例如className,src,alt,width,height便是可以传递给<img>的props
*移步 ./2.App.js*
props使你独立思考父组件和子组件，例如你可以改变父组件的person/size的props而无需考虑子组件如何使用它们，反之可以改变子组件使用props的方式，不必考虑profile
props就像可以调整的旋钮，它们的作用与参数相同————事实上，*props正是组件的唯一参数*，react组件接受一个参数———一个props对象
```js
function Avatar(props) {   // 通常不需要整个props对象，所以可以解构为单独的props
    let person =props.person;
    let size = props.size;
    // ...
}
```
给prop指定默认值 `function Avatar({ person, size = 100 }) {}`
当一些组件将它们*所有*的props转发给子组件，使用更简洁的展开语法：
```js
function Profile(props) {
    return (
        <div className="card">
            <Avatar {...props}/>
        </div>
    )
}
```
请克制的使用展开语法，使用场景比较少

当内容嵌套在JSX标签中时，父组件将在名为children的prop中接收到该内容
*移步 ./2.App.js*
另外，不要尝试更改props，当需要响应式，可以设置state

*props总结：*
1. 要传递props，将它们添加到JSX，就像使用HTML一样
```js
<Avatar
     // 传递两个props给Avatar，person(对象)和size(数字)
    size={100}
    person={{
        name: 'zyy',
        imageId: '123'
    }}
/>
```
2. 要读取props，使用`function fn{{ param1, param2 }}`这样的解构语法
3. prop可以在作为参数传递时指定默认值
4. 像`<Card><Avatar /></Card>`这样的嵌套JSX，将被视为Card组件的children *移步 ./4.App-children-demo.js*
5. Props 是只读的时间快照：每次渲染都会收到新版本的 props。 你不能改变 props。当你需要交互性时，你可以设置 state。


### 条件渲染
在 JSX 中，{cond ? <A /> : <B />} 表示 “当 cond 为真值时, 渲染 <A />，否则 <B />”。

在 JSX 中，{cond && <A />} 表示 “当 cond 为真值时, 渲染 <A />，否则不进行渲染”。



### 保持组件纯粹
纯函数：不会更改在该函数调用前就已经存在的对象或变量；给定相同的输入则返回相同的结果
React假设 *你编写的所有组件都是纯函数* ———— 对于相同的输入，React组件必须返回相同的JSX
组件不应该改变在渲染前就已经存在的任何对象或变量，这会使它们不纯粹
```js
function Cup({guest}) {   // 将guest作为prop传入，这样组件就是纯粹的，因为它返回的jsx只依赖于props
    return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
    return (
        <>
            <Cup guest={1}/>
            <Cup guest={2}/>
            <Cup guest={3}/>
        </>
    );
}
```
突变(mutation): 组件改变了*预先存在的*变量的值
局部mutation: 在渲染时更改你刚刚创建的变量和对象(变量在组件内被创建)
事件处理程序一般在*组件内部*定义，它们不会在渲染期间运行，因此事件处理程序无需是纯函数
仅通过渲染来表达逻辑，好处巨大
push,pop,reverse,sort会改变原始数组
slice,filter,map会创建一个新数组
