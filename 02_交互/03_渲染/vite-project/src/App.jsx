import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function Form() {
  const [isSent,setIsSent] = useState(false);
  const [message,setMessage]=useState('hi')

  if(isSent) {
    return <h1>Your message is on its way</h1>
  }
  return (
    <form onSubmit={(e)=> {
      e.preventDefault();
      setIsSent(true);
      setMessage(message);
    }}>
      <textarea 
        placeholder='Message'
        value={message}
        onChange={e=>setMessage(e.target.value)}
      />
      <button type='submit'>Send</button>
    </form>

    /**
     * 当你单击按钮时会发生以下情况：

    执行 onSubmit 事件处理函数。
    setIsSent(true) 将 isSent 设置为 true 并排列一个新的渲染。
    React 根据新的 isSent 值重新渲染组件。
     */
  )
}
