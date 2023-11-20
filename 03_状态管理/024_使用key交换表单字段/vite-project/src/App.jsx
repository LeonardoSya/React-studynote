import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [reverse, setReverse] = useState(false);

  let checkbox = (
    <label>
      <input
        type='checkbox'
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      调换顺序
    </label>
  );

  if (reverse) {
    return (
      <>
        <Field key="firstName" label="姓氏" />
        <Field key="lastName" label="名字" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="lastName" label="名字" />
        <Field key="firstName" label="姓氏" />
        {checkbox}
      </>
    );
  }
}


function Field({ label }) {
  const [text, setText] = useState('')
  return (
    <label>
      {label}:
      <input
        type='text'
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  )
}