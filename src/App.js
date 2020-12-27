import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from './utils/history'; 
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Router history={history}>
      <ThemeProvider>
        <div className="App">
          Hello World
        </div>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
