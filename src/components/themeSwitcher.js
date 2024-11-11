import React from 'react';

const ThemeSwitcher = ({ toggleTheme, darkTheme }) => {
  return (
    <div className="theme-switcher">
      <h2>Theme Switcher</h2>
      <p>Current Theme: {darkTheme ? 'Dark Mode' : 'Light Mode'}</p>
      <button onClick={toggleTheme}>
        Switch to {darkTheme ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
