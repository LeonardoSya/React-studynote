import { useState } from 'react';  //  用来记住一些东西
// 组件通常作为UI界面的一部分，组件用于渲染、管理和更新应用中的UI元素

// React的组件架构可以创建可重用的组件
function Square({ value, onSquareClick }) {  // 向Square组件传递一个名为value的props

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {  // default表明它是文件中的主要函数
  const [squares, setSquares] = useState(Array(9).fill(null)) // 创建一个包含9个元素的数组并且都设置为null

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </>
  );
}