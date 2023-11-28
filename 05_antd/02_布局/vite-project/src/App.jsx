import React, { useState } from 'react';
import MyFloatButton from './Components/MyFloatButton';
import MyLayout from './Components/MyLayout';
import './style/App.css'
import './style/index.css'


const App = () => {
  return (
    <>
      <MyLayout />
      <MyFloatButton />
    </>
  )
}
export default App;