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

				<button className="loginBtn loginBtn-facebook">
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

