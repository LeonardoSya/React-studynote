import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

export default function Form() {
  const [firstName, setStr1] = useState('');
  const [lastName, setStr2] = useState('');

  function handleFirstNameChange(e) {
    setStr1(e.target.value)
  }

  function handleLastNameChange(e) {
    setStr2(e.target.value)
  }

  function handleReset() {
    setStr1('');
    setStr2('');    
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
