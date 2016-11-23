import React from 'react';
import { Link } from 'react-router'
import Login from "../Login/LoginContainer"

// Material theme
import {ToolbarGroup} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import { white } from 'material-ui/styles/colors';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

// Material CSS rules
const buttonText = {color: white, padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}

export default class NavbarMenu extends React.Component {
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
          <div className="navbar-item">

            <FlatButton
              label="Sign Out" labelStyle={buttonText}
              hoverColor="#00BCD4" rippleColor="#2b4b91"
              onClick={logout}
            />
          </div>
        )
      }
      </ToolbarGroup>
  )}
}