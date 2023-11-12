import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { sculptureList } from './data.jsx';

export default function Gallery() {
  const [index, setIndex] = useState(0);  // * index是state变量，setIndex是对应的setter函数
  const [showMore, setShowMore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);  // * 刚开始i=0，所以setIndex(1)，这告诉React是1并触发下一次渲染，下一次渲染时index被告知自己是1
    }
    // * 请注意，局部变量无法在渲染中持久保存。当React再次渲染这个组件时，它会从头开始渲染，不考虑之前对局部变量的任何更改
    // * 更改局部变量不会触发渲染，React没有意识到它需要使用新数据再次渲染组件
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];

  return (
    <>
      <button
        onClick={handlePrevClick}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <button
        onClick={handleNextClick}
        disabled={!hasNext}
      >
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
    </>
  )
}
