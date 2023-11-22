import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  function handleClick() {
    setIsPlaying(!isPlaying);

    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }


  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <video
        width="250"
        ref={videoRef}
        onPlay={()=>setIsPlaying(true)}
        onPaste={()=>setIsPlaying(false)}

      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  )
}