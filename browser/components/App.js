import React from 'react';
import NavbarContainer from './navbar/NavbarContainer'

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default ({ children }) => (
    <MuiThemeProvider>
      <div id="app">
        <NavbarContainer />
        <div className="container content">
          { children }
        </div>
      </div>
    </MuiThemeProvider>
);
