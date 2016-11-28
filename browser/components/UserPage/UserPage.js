import React from 'react';
import { Link, browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

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
      <form onSubmit={(e) => this.handleSubmit(e, label)}>
        <label>
          Update {label}:
          <input onChange={this.handleChange} type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
        console.log('INSIDE lessons');
        lessons = (
          <List>
            <h2>Completed:</h2>
            {
              Object.keys(completed.lessons).map((lesson_id, index) => {
                return (
                  <ListItem disabled="true" key={index} primaryText={lesson_id} />
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
                  <ListItem disabled="true" key={index} primaryText={`quiz # ${quiz_id}`} />
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

    return (
      <div>
        <div className="col-md-6">
          <List>
            <h2>
              User Information
            </h2>

            <ListItem onClick={() => {
              this.showStuff(this.form('first_name'), 'first_name');
            }} primaryText="First Name" secondaryText={this.props.user.first_name}/>

            <ListItem onClick={() => {
              this.showStuff(this.form('last_name'), 'last_name');
            }} primaryText="Last Name" secondaryText={this.props.user.last_name}/>

            <ListItem onClick={() => {
              this.showStuff(this.form('email'), 'email');
            }} primaryText="Email" secondaryText={email}/>

            <ListItem onClick={() => {
              this.showStuff(this.form('image'), 'image');
            }} primaryText="Update Image"/>

            <ListItem onClick={() => {
              this.showStuff(this.form('password'), 'password');
            }} primaryText="Update Password"/>

            <ListItem disabled="true" primaryText="Admin" secondaryText={isAdmin}/>
            <ListItem disabled="true" primaryText="Keys Collected" secondaryText={keys} />
            <ListItem primaryText="Lessons Completed" secondaryText="Click to view" onClick={() => {
              this.showStuff(lessons, 'lessons');
            }} />
            <ListItem primaryText="Quizzes Completed" secondaryText="Click to view" onClick={() => {
              this.showStuff(quizzes, 'quizzes');
            }} />
          </List>
        </div>
        <div className="col-md-6">
          { this.state.something_to_show }
        </div>
      </div>
    );
  }
}
