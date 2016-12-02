import React from 'react';
import { Link, browserHistory } from 'react-router';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

// NOTE: COMPONENT DESCRIPTION:

// This component asks the user a question, evaluates their input,
// congratulations them for a correct answer or gives them a tip on an
// incorrect answer.

// Also, when the user answers the question, it will enable the next button in the
// parent component.
// Basically a user has to answer a question to be able to move on in the slides.

const pianoInput = function (state) {

  var x = function (update) {
    state.setState({
      notePlayed: update
    });
  }
  return x;
}

export let pianoHelper;

export default class PianoUserInput extends React.Component {

  constructor () {

    super ();

    this.state = {
      notePlayed: undefined
    };
  }

  componentDidUpdate () {
    console.log(this.state.notePlayed);
  }
  componentWillMount () {
    pianoHelper = pianoInput(this);
  }
  componentWillUnmount () {
    pianoHelper = undefined;
  }

  render() {

    return (
      <div>
        Hi
      </div>
    );

  }
}
