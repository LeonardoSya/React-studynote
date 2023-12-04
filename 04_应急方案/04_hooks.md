*hook是React函数组件的副作用的解决方案，用来为函数组件引入副作用*
由于副作用很多，所以hooks有很多种，React为常见的操作(副作用)都提供了专用的hooks
+ useState 保存状态
+ useContext 保存上下文
+ useRef 保存引用
+ useEffect *通用的副作用hook*

### useEffect()
常见用途：
data fetching(获取数据), 
setting up a subscription(事件监听和订阅), 
changing the DOM, 
logging(输出日志)

副作用是随组件加载而生成的，那么组件卸载时，可能需要清理这些副作用
实际上，清理函数不仅会在组件卸载时执行一次，每次副作用函数重新执行之前也会执行一次，用来清理上一次渲染的副作用

如果有多个副作用，应该调用多个useEffect