import { useState } from 'react'
import './App.css'


export default function App() {
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && <p><i>提示：你最喜欢的城市？</i></p>}
      <Form />
      <hr />
      {showHint ? (
        <button onClick={() => {
          setShowHint(false);
        }}>隐藏提示</button>
      ) : (
        <button onClick={() => {
          setShowHint(true);
        }}>显示提示</button>
      )}
    </div>
  );

}

function Form() {
  const [text, setText] = useState('');
  return (
    <textarea
      value={text}
      onChange={e => setText(e.target.value)}
    />
  );
}
