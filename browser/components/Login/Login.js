import React from 'react';
import Dialog from "material-ui/Dialog"
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import { TextField, SelectField, MenuItem } from 'material-ui';
import { Link } from 'react-router';
import { login, signup } from '../../redux/user';

/* -----------------    COMPONENT     ------------------ */

const buttonText = {color: "white", padding: 0, transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'}

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

		console.log(this.props)

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillMount() {
		// FOR FACEBOOK LOGIN (Need to refactor...)
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
			<div>
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

let access_token, user_id, user_email, user_photo, credentials;

function fb_login(action, handleOauth){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

			FB.api("/me?fields=name,email", (response) => {
				let firstname = response.name.split(" ")[0],
				lastname = response.name.split(" ")[1],
				email = response.email,
				password = user_id;
				FB.api(
					`${response.id}/picture`,
					function (response) {
						user_photo = (response && !response.error) ? response.url : "https://s-media-cache-ak0.pinimg.com/564x/95/80/56/958056f7423e2aee233b27ca3ebe32fa.jpg";
						credentials = {
							firstname,
							lastname,
							email,
							password
						};
						// HANDLE SUBMIT HERE:
						handleOauth(action, credentials);
					}
				);
			})
        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    }, {scope: "public_profile, email"});
}