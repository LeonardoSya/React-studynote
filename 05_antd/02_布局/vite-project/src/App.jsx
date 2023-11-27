import React, { useState } from 'react';
import MyFloatButton from './Components/MyFloatButton';
import MyLayout from './Components/MyLayout';
import './App.css'
import './index.css'


const App = () => {
  return (
    <>
      <MyLayout />
      <MyFloatButton />
    </>
  )
}
export default App;