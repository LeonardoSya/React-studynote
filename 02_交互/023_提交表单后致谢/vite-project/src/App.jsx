import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  function returnPage() {
    setIsSent(false);
    setMessage('')
  }
  if (isSent) {
    return (
      <>
        <h1>Thank you!</h1>
        <h3>Your message: {message}</h3>
        <button type='type' onClick={returnPage}>return</button>
      </>
    )
  } else {

    return (
      <form onSubmit={e => {
        e.preventDefault();
        // alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder='Message'
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button
          type='submit'
          disabled={message == '' ? true : false}
        >Send</button>
      </form>
    );
  }
}

export default FeedbackForm
