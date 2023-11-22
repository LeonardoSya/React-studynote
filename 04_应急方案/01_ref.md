### ref
当你希望组件记住某些信息，但又不希望让这些信息触发新的渲染
设置 state 会重新渲染组件，而更改 ref 不会！你可以通过 ref.current 属性访问该 ref 的当前值

何时使用ref?
存储 timeout ID
存储和操作 DOM 元素
存储不需要被用来计算 JSX 的其他对象。

### 使用ref操作DOM
useRef Hook 返回一个对象，该对象有一个名为 current 的属性。最初，myRef.current 是 null。当 React 为这个 <div> 创建一个 DOM 节点时，React 会把对该节点的引用放入 myRef.current。然后，你可以从 事件处理器 访问此 DOM 节点，并使用在其上定义的内置浏览器 API。
```js
// 可以使用任意浏览器api
<div ref={myRef}></div>
...
myRef.current.scrollIntoView();
```

如果你尝试将 ref 放在 你自己的 组件上，例如 <MyInput />，默认情况下你会得到 null
因为react不允许组件访问其他组件的dom节点
相反，想要 暴露其 DOM 节点的组件必须选择该行为。一个组件可以指定将它的 ref “转发”给一个子组件。下面是 MyInput 如何使用 forwardRef API：
```js
const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```
将低级组件（如按钮、输入框等）的 ref 转发到它们的 DOM 节点是一种常见模式。另一方面，像表单、列表或页面段落这样的高级组件通常不会暴露它们的 DOM 节点，以避免对 DOM 结构的意外依赖