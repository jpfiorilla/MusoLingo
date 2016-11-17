import React from'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login, signup } from '../../redux/user';


function LoginDecorator (Login) {
	return class StatefulLogin extends React.Component {
		constructor(props) {
			super(props) 
			this.state = {
				firstname: '', lastname: '', email: '', 
				password: '', login_error: ''}

			this.handleChange = this.handleChange.bind(this);
			this.handleSubmit = this.handleSubmit.bind(this);
		}
			
		handleChange(field, value) {
			let newState = {};
			newState[field] = value
			this.setState(newState);
		}

		handleSubmit (evt) {
			evt.preventDefault();

			const credentials = {
				email: this.state.email,
				password: this.state.password
			}

			this.props.login(credentials, (err) => {
				this.setState({ login_error: err });
			});
		}

		render() {
			return (
				<Login
				  handleChange={this.handleChange}
          			handleSubmit={this.handleSubmit}
					login_error={this.state.login_error}
				/>
			)
		}
	}
}


const mapDispatchtoProps = dispatch => ({ 
	signup: credentials => {
		dispatch(signup(credentials));
	},
	login: (credentials, displayErr) => {
		dispatch(login(credentials, displayErr));
	}
})

export default connect(null, mapDispatchtoProps)(LoginDecorator(Login));
