import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './utils/history'; 
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'dark' ? darkMode : lightMode;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <Router history={history}>
      <ThemeProvider theme={themeMode}>
        <div className="App">
          <GlobalStyles/>
          Hello World
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
