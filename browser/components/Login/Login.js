import React from 'react';
import Dialog from "material-ui/Dialog"
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import { TextField, SelectField, MenuItem } from 'material-ui';
import { Link } from 'react-router';
import { login, signup } from '../../redux/user';
import fb_login from "./fbLogin";

/* -----------------    COMPONENT     ------------------ */

const buttonText = {
	color: "white",
	padding: 0,
	transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}

const dialogStyle = {
	width: "20em",
	height: "40em",
	textAlign: "center"
}

const dividerStyle = {
	backgroundColor: "rgb(147, 147, 147)"
}

export default class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			open: false,
			action: null
		}

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillMount() {
		// Facebook Login:
		window.fbAsyncInit = function() { // Initializes Facebook Login
            FB.init({
            appId      : '212413969199671',
            xfbml      : true,
            version    : 'v2.6'
            })
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
	}

	// For login toggle
	handleOpen(action) {
		this.setState({
			open: true,
			action
		})
	}

	// For login toggle
	handleClose() {
		this.setState({open: false})
	}

	render () {
		const { handleChange, handleOauth, handleSubmit, handleSignup, login_error } = this.props;
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label={this.state.action}
				primary={true}
				keyboardFocused={true}
				onClick={(this.state.action === "Log in") ? handleSubmit : handleSignup}
			/>
		];

		return (
			<div id="login-popup">
				<FlatButton
					label="Sign In" labelStyle={buttonText}
					onClick={() => {this.handleOpen("Log in")}}
					hoverColor="#2b4b91" rippleColor="#2b4b91"
					/>
				<FlatButton
					label="Sign Up" labelStyle={buttonText}
					onClick={() => {this.handleOpen("Sign up")}}
					hoverColor="#2b4b91" rippleColor="#2b4b91"
					/>

				<Dialog
					id="login-dialog"
					actions={actions}
					modal={false}
					autoScrollBodyContent={true}
					open={this.state.open}
					onRequestClose={this.handleClose}
					contentStyle={dialogStyle}
				>

				<button onClick={() => {fb_login(this.state.action, handleOauth)}} className="loginBtn loginBtn-facebook">
					{this.state.action} with Facebook
				</button>

				<button className="loginBtn loginBtn-google">
					{this.state.action} with Google
				</button><br /><br />

				<Divider style={dividerStyle}/><br />
				or

				<div>
					{
						(this.state.action === "Log in") ? (
							<form>
								<TextField
									hintText="E-mail"
									floatingLabelText="E-mail Address"
									onChange={(evt) => handleChange("email", evt.target.value)}
								/>

								<TextField
									hintText="Password"
									floatingLabelText="Password"
									type="password"
									onChange={(evt) => handleChange("password", evt.target.value)}
								/>
							</form>
						) : (
							<form>
								<TextField
									hintText="First name"
									floatingLabelText="First name"
									onChange={(evt) => handleChange("firstname", evt.target.value)}
								/>
								<TextField
									hintText="Last name"
									floatingLabelText="Last name"
									onChange={(evt) => handleChange("lastname", evt.target.value)}
								/>
								<TextField
									hintText="E-mail"
									floatingLabelText="E-mail Address"
									onChange={(evt) => handleChange("email", evt.target.value)}
								/>

								<TextField
									hintText="Password"
									floatingLabelText="Password"
									type="password"
									onChange={(evt) => handleChange("password", evt.target.value)}
								/>
							</form>
						)
					}
				</div>
			</Dialog>
		</div>
		)
	}
}