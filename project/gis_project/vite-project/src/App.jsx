import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MapWrapper from './MapWrapper'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>基于 React + Vite 的地图分析展示平台</h1>
      <p className="read-the-docs">
        {/* 刘申奇遇 张津儒 王治军 张毅阳 · 团队 */}
      </p>

    <MapWrapper />
    </>
  )
}

export default App
