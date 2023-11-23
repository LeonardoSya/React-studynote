import { useState, useRef } from 'react'
import { flushSync } from 'react-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function CatFriends() {
  const [index, setIndex] = useState(0)
  const selectedRef = useRef(null);

  return (
    <>
      <nav>
        <button onClick={() => {
          flushSync(() => {
            if (index < catList.length - 1) {
              setIndex(index + 1);
            } else {
              setIndex(0)
            }
          });
          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
          });
        }}>next</button>
      </nav>

      <div>
        <ul>
          {catList.map((cat, i) => (
            <li
              key={cat.id}
              ref={index === i ? selectedRef : null}
            >
              <img
                className={
                  index === i ? 'active' : ''}
                src={cat.imageUrl}
                alt={'猫猫 #' + cat.id}
              /></li>
          ))}
        </ul>
      </div>
    </>
  )
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}