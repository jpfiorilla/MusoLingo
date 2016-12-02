import React from 'react';
import { Link, browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class UserPage extends React.Component {

  constructor () {
    super ();

    this.state = {
      something_to_show: '',
      active: '',
      update: ''
    };
    this.showStuff = this.showStuff.bind(this);
    this.form = this.form.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit (event, attrToUpdate) {
    this.props.updateUserInfo(this.state.update, attrToUpdate, this.props.user.id);
    this.state.update = undefined;
    event.preventDefault();
    alert('Update Successful!');
    this.state.something_to_show = undefined;
    this.state.active = undefined;
    this.forceUpdate();
  }
  handleChange (event) {
    this.state.update = event.target.value;
  }

  showStuff (stuff, quizOrLesson) {
    if ((! this.state.something_to_show) || (quizOrLesson !== this.state.active)) {
      this.state.update = undefined;
      this.state.something_to_show = stuff;
      this.state.active = quizOrLesson;
    } else {
      this.state.something_to_show = undefined;
      this.state.active = undefined;
    }
    // NOTE: need to force update when state changes since react doesnt do this
    // automatically
    this.forceUpdate();
  }
  form (label) {
    return (
      <div className="actual-form">
        <div>
          <TextField
            floatingLabelText={`Update ${label}:`}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <RaisedButton label="Submit!" onClick={(e) => this.handleSubmit(e, label)} />
        </div>
      </div>
    );
  }

  render() {
    // %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
    // NOTE: User information.
    var firstName, lastName, email, image, isAdmin, completed, keys,
    quizzes, lessons;

    lessons = (<p>No lessons completed yet</p>);
    quizzes = (<p>No quizzes completed yet</p>);

    firstName = this.props.user.first_name;
    lastName = this.props.user.last_name;
    email = this.props.user.email;
    image = this.props.user.image;
    isAdmin = this.props.user.isAdmin;
    completed = this.props.user.completed;

    // NOTE: if completed is defined
    if (completed) {

      // NOTE: set local variables to the user's completed stuff.
      keys = completed.keys;

      // NOTE: if the user has completed some lessons
      // we want to assign a local lessons variable to some JSX.
      if (Object.keys(completed.lessons).length) {
        lessons = (
          <List>
            <h2>Completed:</h2>
            {
              Object.keys(completed.lessons).map((lesson_id, index) => {
                return (
                  <ListItem disabled={true} key={index} primaryText={`lesson # ${lesson_id}`} />
                );
              })
            }
          </List>
        );
      }
      // NOTE: if the user has completed some quizzes, we assign jsx to
      // a local quizzes variable.
      if (Object.keys(completed.quizzes).length) {
        // NOTE: quizzes is the local variable for the JSX.
        quizzes = (
          <List>
            <h2>Completed:</h2>
            {
              Object.keys(completed.quizzes).map((quiz_id, index) => {
                return (
                  <ListItem disabled={true} key={index} primaryText={`Quiz # ${quiz_id}`}
                    secondaryText={`Score: ${completed.quizzes[quiz_id] * 100}%`}
                  />
                );
              })
            }
          </List>
        );
      }
    }
    if (isAdmin) {
      isAdmin = 'Yup';
    } else {
      isAdmin = 'Nope';
    }
    // %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
    const nameStyle = {
      fontSize: '25px',
    }
    const otherStyle = {
      fontSize: '20px',
    };

    return (
      <div>
        <div className="main-div col-md-3 col-lg-3">
          <List>
            <h2 className="header">
              User Information
            </h2>
            <div className="name">
              <ListItem style={nameStyle} onClick={() => {
                this.showStuff(this.form('first_name'), 'first_name');
              }} primaryText={this.props.user.first_name} secondaryText="First Name"/>

              <ListItem style={nameStyle} onClick={() => {
                this.showStuff(this.form('last_name'), 'last_name');
              }} primaryText={this.props.user.last_name} secondaryText="Last Name"/>

              <ListItem style={otherStyle} onClick={() => {
                this.showStuff(this.form('email'), 'email');
              }} primaryText={email} secondaryText="Email" />

              <ListItem style={otherStyle} onClick={() => {
                this.showStuff(this.form('image'), 'image');
              }} primaryText="Update Image"/>

              <ListItem style={otherStyle} onClick={() => {
                this.showStuff(this.form('password'), 'password');
              }} primaryText="Update Password"/>

              <ListItem style={otherStyle} disabled={true} primaryText="Admin" secondaryText={isAdmin}/>
              <ListItem style={otherStyle} disabled={true} primaryText={keys} secondaryText="Keys Collected" />
              <ListItem style={otherStyle} primaryText="Completed Lessons" secondaryText="Click to view" onClick={() => {
                this.showStuff(lessons, 'lessons');
              }} />
              <ListItem style={otherStyle} primaryText="Completed Quizzes" secondaryText="Click to view" onClick={() => {
                this.showStuff(quizzes, 'quizzes');
              }} />
            </div>
          </List>
        </div>
        <div className="form col-md-9 col-lg-9">
          { this.state.something_to_show }
        </div>
      </div>
    );
  }
}
