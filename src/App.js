import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './utils/history'; 
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './store/Mode/useDarkMode';
import { darkMode, lightMode } from './store/Mode/theme';
import { GlobalStyles } from './store/Mode/global';

import Navbar from './components/Navbar';
import Home from './components/Home'; 

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
          <Navbar toggleTheme={toggleTheme} theme={theme}/>
          <Route exact path='/'><Home toggleTheme={toggleTheme} theme={theme}/></Route>
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
