import React from 'react';
import Dialog from "material-ui/Dialog"
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'
import { TextField, SelectField, MenuItem } from 'material-ui';
import { Link } from 'react-router';

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
			open: false
		}

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	componentWillMount() {
		window.fbAsyncInit = function() {
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

	handleOpen() {
		this.setState({open: true})
	}

	handleClose() {
		this.setState({open: false})
	}

	render () {
		const { handleChange, handleSubmit, login_error } = this.props;
		const actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onClick={this.handleClose}
			/>,
			<FlatButton
				label="Login"
				primary={true}
				keyboardFocused={true}
				onClick={handleSubmit}
			/>
		];
		return (
			<div>
				<FlatButton
              label="Sign In" labelStyle={buttonText}
			  onClick={this.handleOpen}
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

				<button onClick={fb_login} className="loginBtn loginBtn-facebook">
					Sign in with Facebook
				</button>

				<button className="loginBtn loginBtn-google">
					Sign in with Google
				</button><br /><br />

				<Divider style={dividerStyle}/><br />
				or

				<div>
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
				</div>

				</Dialog>

			</div>
		)
	}
}

let access_token, user_id, user_email;

function fb_login(){
    FB.login(function(response) {

        if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            access_token = response.authResponse.accessToken; //get access token
            user_id = response.authResponse.userID; //get FB UID

            FB.api('/me', function(response) {
				console.log(response);
            });

        } else {
            //user hit cancel button
            console.log('User cancelled login or did not fully authorize.');

        }
    });
}