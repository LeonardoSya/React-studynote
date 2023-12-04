import React, { useEffect, useState } from 'react'
import './app.css'

// * 1. 在组件外部建立一个Context
const ThemeContext = React.createContext(null);

const App = () => {
  const [theme, setTheme] = useState('light');

  return (
    // * 包含State状态的对象通过Context向下传递，这允许下面的任何组件同时读取 Theme 和 setTheme，并且能够在需要的时候调用setTheme
    <ThemeContext.Provider value={{ theme, setTheme }}>  
      <Form />
      <label>
        <input
          type='checkbox'
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        />
        Use dark mode
      </label>
    </ThemeContext.Provider>
  )
}

const Form = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <Panel title='welcome'>
      <Button>sign up</Button>
      <Button>log in</Button>
      {/* !!! */}
      <button
        className={'panel-' + theme}
        onClick={(e) => {
          e.stopPropagation()
          console.log('click!')
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}>
        click me !
      </button>
    </Panel>
  )
}

const Panel = ({ children, title }) => {
  const { theme } = React.useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h5>{title}</h5>
      {children}
    </section>
  )
}

const Button = ({ children }) => {
  const { theme } = React.useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <button className={className}>
      {children}
    </button>
  )
};

export default App;


