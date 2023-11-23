### useEffect

副作用应该被放在事件处理函数或useEffect中
当副作用是由组件渲染引起的，而不是任何特定的交互引起的，应该将它放在Effect中

Effect会在每次渲染后执行
Effect通常应该使组件与外部系统保持同步，如果没有外部系统，你只是想根据其他状态调整一些状态，那么就不需要Effect

如何编写 Effect 
编写 Effect 需要遵循以下三个规则：

1. 声明 Effect。默认情况下，Effect *会在每次渲染后都会执行*。
2. 指定 Effect 依赖。大多数 Effect 应该*按需执行*，而不是在每次渲染后都执行。例如，淡入动画应该只在组件出现时触发。连接和断开服务器的操作只应在组件出现和消失时，或者切换聊天室时执行
3. 必要时添加清理（cleanup）函数。有时 Effect 需要指定如何停止、撤销，或者清除它的效果。例如，“连接”操作需要“断连”，“订阅”需要“退订”，“获取”既需要“取消”也需要“忽略”

指定Effect依赖： 很多时候不需要每次渲染时都执行Effect
指定依赖[isPlaying]告诉react，如果isPlaying在上一次渲染时与当前相同，它应该跳过重新运行Effect这一步骤
比较依赖项的原理：`Object.is('test2', 'test1')`为false，则test2这次的Effect不能跳过

```js
useEffect(() => {
  // 这里的代码会在每次渲染后执行
});

useEffect(() => {
  // 这里的代码只会在组件挂载后执行
}, []);

useEffect(() => {
  //这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行
}, [a, b]);
```

### 挂载 mount 与 清理函数 cleanup
```js
useEffect(() => {   // Effect中的代码没有使用任何props或state，此时指定依赖数组为[]
  const connection = createConnection();
  connection.connect();
  return () => {  // 在Effect中返回一个清理函数
    connection.disconnect();
  };
}, []);
```
[]告诉react仅在组件“挂载”时运行此代码，即首次出现在屏幕上这一阶段
return一个cleanup，告诉react在每次重新执行Effect之前，react都会调用清理函数，组件被卸载时也会调用清理函数

订阅事件：如果Effect订阅了某些事件，cleanup应该退订这些事件
```js
useEffect(()=> {
    function handleScroll(e) {
        console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
}, [])
```

触发动画：如果 Effect 对某些内容加入了动画，清理函数应将动画重置
```js
useEffect(() => {
  const node = ref.current;
  node.style.opacity = 1; // 触发动画
  return () => {
    node.style.opacity = 0; // 重置为初始值
  };
}, []);
```
清理函数应该将时间轴重置为其初始状态

另外，仅在严格模式下的开发环境中，React 会挂载两次组件，以对 Effect 进行压力测试。



### 在事件处理函数和Effect中选择

事件处理函数只在响应特定的交互操作时运行(比如send message)
每当需要同步，Effect就会运行(组件和聊天室保持连接)