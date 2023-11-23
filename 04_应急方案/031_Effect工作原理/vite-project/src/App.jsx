import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? '卸载' : '挂载'}组件</button>
      {show && <hr />}
      {show && <Playground />}
    </>
  )
}

function Playground() {
  const [text, setText] = useState('test')

  useEffect(() => {
    function onTimeout() {  
      console.log('⏰ ' + text);
    }

    console.log('🔵 安排 "' + text + '" 日志');
    const timeoutId = setTimeout(onTimeout, 3000); // 安排控制台日志，在Effect运行三秒后显示输入文本

    return () => {   // React总是在执行下一轮渲染的Effect之前清理上一轮渲染的Effect
      console.log('🟡 取消 "' + text + '" 日志');  
      clearTimeout(timeoutId);
    };
  }, [text]);
  // 最开始产生额外的安排/取消动作，是因为react开发环境下会重新挂载组件一次，以验证你是否正确地实现了清理函数 

  return (
    <>
      <label>
        日志内容:{' '}
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </>
  )
}