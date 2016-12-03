import React from 'react';
import { Link, browserHistory } from 'react-router'
import {LoginContainer} from "../Login/LoginContainer"

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
      open: false,
      grow: false
    }
    this.onAccountToggle = this.onAccountToggle.bind(this)
    this.handleAccountClose = this.handleAccountClose.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.user.completed.quizzes !== nextProps.user.completed.quizzes) {
      this.state.grow = true;
      return true;
    } else if (this.props.user.completed.lessons !== nextProps.user.completed.lessons) {
      this.state.grow = true;
      return true;
    } else if (this.props.user.completed.challenges !== nextProps.user.completed.challenges) {
      this.state.grow = true;
      return true;
    } else {
      this.state.grow = false;
      return true;
    }
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
      <ToolbarGroup style={{ float: 'right' }}>
        <div className="navbar-item">

        </div>
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
              data-badge={this.props.user.completed.keys}
              className={(this.state.grow) ? "grow " + "material-icons mdl-badge mdl-badge--no-background mdl-badge--overlap" : "" + "material-icons mdl-badge mdl-badge--no-background mdl-badge--overlap"}>vpn_key</i>
          </div>
        ) : null
      }
      {
        // /login or /logout
        role === 1 ? (
          <div className="navbar-item">
            <LoginContainer />
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
                <MenuItem style={{fontFamily: "gravity-book", textAlign: "center"}} onClick={() => browserHistory.push("/user")} primaryText="Account" />
                <MenuItem style={{fontFamily: "gravity-book", textAlign: "center"}} onClick={() => {browserHistory.push('/home'); logout();}} primaryText="Sign Out" />
              </Menu>
            </Popover>
          </div>
        )
      }
      </ToolbarGroup>
  )}
}
