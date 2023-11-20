import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function Accordion() {
  // 4. 为公共父组件添加状态
  // 状态提升通常会改变原状态的数据存储类型
  const [activeIndex, setActiveIndex] = useState(0)  // 用0,1作为当前被激活的Panel索引

  return (  // 3. 从公共父组件传递硬编码数据
    <>
      <h2>title1</h2>
      <Panel
        title='about'
        // isActive={true}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        message1
      </Panel>
      <Panel
        title='source'
        // isActive={true}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        message2
      </Panel>
    </>
  )
}

function Panel({ title, children, isActive, onShow }) {  // 2. 把isActive放到子组件的props中
  // 1. 从子组件中移除状态
  // const [isActive, setIsActive] = useState(false)
  return (
    <section className='panel'>
      <h3>{title}</h3>
      {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>show me</button>)}
    </section>
  )
}