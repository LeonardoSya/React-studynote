import { useState, useRef, useEffect } from 'react'
import './App.css'

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ? '暂停' : '播放'}</button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  )
}

function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  // 把调用DOM方法的操作封装在Effect中，可以让react先更新屏幕，确定相关DOM创建好之后再运行Effect
  useEffect(() => {
    if (isPlaying) {  
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);  // 将依赖数组传入useEffect的第二个参数，告诉react跳过不必要地重新运行Effect

  // 当 VideoPlayer 组件渲染时（无论是否为首次渲染），都会发生以下事情。
  // 首先，React 会刷新屏幕，确保 <video> 元素已经正确地出现在 DOM 中；
  // 然后，React 将运行 Effect；最后，Effect 将根据 isPlaying 的值调用 play() 或 pause()。

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
    />
  )
}
