局部变量无法在多次渲染中持久保存，且更新局部变量不会触发渲染
因此，要使用新数据更新组件，需要：保留渲染之间的数据、重新渲染
useState Hook：State变量用于保存渲染间的数据，State setter函数更新变量并触发React再次渲染组件

### Hook(钩子)
use开头的函数被称为Hook Hook是特殊的函数，只在渲染时有效。
Hooks只能在组件或自定义Hook的最顶层调用，不能在if、for等嵌套函数中调用Hook
在组件顶部 use React特性，类似在文件顶部导入模块

`const [index, setIndex] = useState(0)`  
我希望React记住index
每次组件渲染时，useState都会给我一个包含两个值的数组: state变量(index)会保存上次渲染的值，state setter函数(setIndex)可以更新state变量并触发React重新渲染组件

State是隔离的，如果渲染一个组件两次，每个副本都会有完全隔离的state。因此state不依赖于特定函数调用或在代码中的位置
另外，state完全私有于声明它的组件，父组件无法更改它(与props完全不同)，这样往任何组件添加或删除state都不会影响其他组件

那么如何同步两个组件的states? 从子组件中删除state并将其添加到最近的共享父组件中