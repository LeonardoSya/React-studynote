import { useState, useRef, forwardRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function CatFriends() {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);


  // #region
  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }
  // #endregion

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>Tom</button>
        <button onClick={handleScrollToSecondCat}>Maru</button>
        <button onClick={handleScrollToThirdCat}>Jellylorum</button>
      </nav>
      <div>
        <Cats
          firstCatRef={firstCatRef}
          secondCatRef={secondCatRef}
          thirdCatRef={thirdCatRef}
        />
      </div>
    </>
  )

  function Cats({ firstCatRef, secondCatRef, thirdCatRef }) {
    return (
      <ul>
        <li>
          <img
            src='https://placekitten.com/g/200/200'
            alt='Tom'
            ref={firstCatRef}
          />
        </li>
        <li>
          <img
            src='https://placekitten.com/g/300/200'
            alt='Tom'
            ref={secondCatRef}
          />
        </li>
        <li>
          <img
            src='https://placekitten.com/g/250/200'
            alt='Tom'
            ref={thirdCatRef}
          />
        </li>
      </ul>
    )
  }
}

// const MyInput = forwardRef(function MyInput(props, ref) {
//   return <input {...props} ref={ref} />;
// });

// export default function Form() {
//   const inputRef = useRef(null);

//   function handleClick() {
//     inputRef.current.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>聚焦输入框</button>
//     </>
//   )
// }

