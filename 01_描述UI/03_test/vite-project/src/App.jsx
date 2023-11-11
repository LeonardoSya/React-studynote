// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Fragment } from 'react';
import './App.css'

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

// // 利用添加后缀的方式作为诗句与分隔符的key
// export default function Poem() {
//   let output = [];

//   poem.lines.forEach((line, i) => {
//     output.push(
//       <hr key={i + '-separator'} />
//     );
//     output.push(
//       <p key={i + '-text'}>
//         {line}
//       </p>
//     );
//   });

/// output.shift();  // 移除第一个 <hr />

//   return (
//     <article>
//       {output}
//     </article>
//   )
// }

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) =>
      // 采用fragment语法来包裹JSX节点可以避免引入额外的<div> 
        <Fragment key={i}>      
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      )}
    </article>
  )
}