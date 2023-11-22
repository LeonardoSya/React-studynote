import { useState } from 'react'
import './App.css'
import { useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    // 开始计时
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      // 每10ms更新一次当前时间
      setNow(Date.now())
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
    </>
  )

}