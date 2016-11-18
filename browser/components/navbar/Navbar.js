import React from 'react';
import { Link } from 'react-router';

// Material theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {NavbarMenuContainer} from "./NavbarContainer"
import { white } from 'material-ui/styles/colors';

// Material CSS rules
const toolbarText = {color: white, padding: 0}
const centerText = {marginLeft: '5%'}

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }

    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleClose() {
    this.setState({open: false});
  }

  render(props) {
    return (
      <Toolbar id="navbar" style={{backgroundColor: '#2b4b91'}}>
        <ToolbarGroup>
          <div className="navbar-item">
            <i id="drawer-icon" className="material-icons" hoverColor="#00BCD4" onClick={this.handleToggle}>view_headline</i>
            <Drawer
              docked={false}
              width={200}
              onRequestChange={(open) => this.setState({open})}
              open={this.state.open}>
              <MenuItem onClick={this.handleClose}>Lesson 1</MenuItem>
              <MenuItem onClick={this.handleClose}>Lesson 2</MenuItem>
            </Drawer>
          </div>
        </ToolbarGroup>
        <ToolbarGroup style={centerText}>
          <Link to="/">
            <ToolbarTitle style={toolbarText} text="MusoLingo" />
          </Link>
        </ToolbarGroup>
        <NavbarMenuContainer { ...props } />
      </Toolbar>
    )
  }
}
