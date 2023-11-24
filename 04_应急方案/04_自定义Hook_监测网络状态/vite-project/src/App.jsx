// import { useState, useEffect } from 'react'
import useOnlineStatus from './useOnlineStatus';
import './App.css'

function StatusBar() {
  const isOnline = useOnlineStatus();  // 这是完全独立的两个state和Effect

  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>
}

function SaveButton() {
  const isOnline = useOnlineStatus();    // 这是完全独立的两个state和Effect

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  )
}

export default function App() {
  return (
    <>
      <StatusBar />
      <SaveButton />
    </>
  )
}