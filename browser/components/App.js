import React from 'react';
import NavbarContainer from './navbar/NavbarContainer';
import Keyboard from './Keyboard/Keyboard.js';

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <NavbarContainer />
        <div className="container content">
          { children }
          <Keyboard />
        </div>
      </div>
  </MuiThemeProvider>
);
