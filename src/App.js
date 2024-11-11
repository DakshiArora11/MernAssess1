// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Counter from './components/counter';
import Timer from './components/timer';
import ThemeSwitcher from './components/themeSwitcher';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div>
      <Header title="React App" />
      <div className="app-content">
        <div className="card">
          <Counter />
        </div>
        <div className="card">
          <Timer />
        </div>
        <div className={`card ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
          <ThemeSwitcher toggleTheme={toggleTheme} darkTheme={darkTheme} />
        </div>
      </div>
    </div>
  );
}

export default App;
