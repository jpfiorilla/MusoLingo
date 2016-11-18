import React from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerOpenRightExample extends React.Component {

  constructor(props) {
	super(props);
	this.state = { open: false };

	this.handleToggle = this.handleToggle.bind(this);  
  }

  handleToggle() {
	this.setState({ open: !this.state.open });
  }

  render() {
	  const {user} = this.props;
	
	  return (
		<div className="account-drawer">
			<RaisedButton
			label="Toggle Drawer"
			onClick={this.handleToggle}
			/>
			<Drawer width={250} openSecondary={true} open={this.state.open} >
				<img id="user-image" src={user.image} />
				<h3 id="user-name">{`${user.first_name + " " + user.last_name}`}</h3>
			</Drawer>
		</div>
		);
	}
}