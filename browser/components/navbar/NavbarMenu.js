import React from 'react';
import { Link, browserHistory } from 'react-router'
import Login from "../Login/LoginContainer"

// Material theme
import {ToolbarGroup} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { white } from 'material-ui/styles/colors';

import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

// Material CSS rules
const buttonText = {color: white, padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}

export default class NavbarMenu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
    this.onAccountToggle = this.onAccountToggle.bind(this)
    this.handleAccountClose = this.handleAccountClose.bind(this)
  }

  onAccountToggle(e){
    e.preventDefault()

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    })
  }

  handleAccountClose() {
    this.setState({
      open: false
    })
  }

  render(props) {
    const { role, logout, user } = this.props;
    return (
      <ToolbarGroup style={{float: 'right'}}>
      {
        // /admin
        role === 3 ? (
          <div className="navbar-item">
            <Link to="/admin">
              <FlatButton
                label="Admin" labelStyle={buttonText}
                hoverColor="#2b4b91" rippleColor="#2b4b91"
              />
            </Link>
          </div>
        ) : null
      }
      {
        // /account
        role === 2 ? (
          <div className="navbar-item">
            <i id="navbar-key"
              data-badge={this.props.keys}
              className="material-icons mdl-badge mdl-badge--no-background mdl-badge--overlap">vpn_key</i>
          </div>
        ) : null
      }
      {
        // /login or /logout
        role === 1 ? (
          <div className="navbar-item">
            <Login />
          </div>
        ) : (
          <div className="account-dropdown">
            <img id="account-beathoven-head" onClick={this.onAccountToggle} src="/images/beathoven-head.png" />
            <Popover open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: "left", vertical: "bottom"}}
              targetOrigin={{horizontal: "left", vertical: "top"}}
              onRequestClose={this.handleAccountClose}>
              <Menu>
                <MenuItem onClick={() => browserHistory.push("/user")} primaryText="Account" />
                <MenuItem onClick={logout} primaryText="Sign Out" />
              </Menu>
            </Popover>
          </div>
        )
      }
      </ToolbarGroup>
  )}
}
