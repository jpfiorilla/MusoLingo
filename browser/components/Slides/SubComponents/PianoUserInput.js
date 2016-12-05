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


// NOTE: this function is what we are going to send out
// to the piano hero functions to update our state when a note is played.
// The outter function will scope our state while the inner function
// can be called from wherever we send it to update the state.
const pianoInput = function (state, notesToPlay) {

  var hiIamTheHelperFunc = function (update) {
    let message;
    if (update === notesToPlay[0]) {
      notesToPlay.shift();
      message = `That was certainly a ${update}!  Way to go!!`;
    } else {
      message = `That was a ${update}!  Keep trying!`;
    }

    state.setState({
      notePlayed: update,
      notesToPlay,
      message
    });
  }
  return hiIamTheHelperFunc;
}

// NOTE: export piano input so the other functions can pass it really useful information.
export let pianoHelper;

// NOTE: Main React component.
export default class PianoUserInput extends React.Component {

  constructor (props) {

    super (props);

    this.state = {
      notePlayed: undefined,
      notesToPlay: this.props && this.props.notesToPlay,
      message: undefined
    };
  }

  componentDidUpdate () {
    // NOTE: you dont need this here, i just dont know music and need to see
    // the note logged to the console during testing so i can pass the test.

    // console.log(this.state.notePlayed);
    this.props.enable();
  }

  componentWillMount () {
    // invoke the wrapper function with state and notesToPlay.
    pianoHelper = pianoInput(this, this.state.notesToPlay);
  }

  componentWillUnmount () {
    // NOTE: when you play the keyboard in any other component we
    // don't want pianoHelper to run anymore.
    pianoHelper = undefined;
  }

  render() {
    // NOTE: direction is the teacher's direction to the student.
    let direction;

    // NOTE: Check if we still have notes to play.
    if (this.state.notesToPlay.length) {
      direction = `Play a ${this.state.notesToPlay[0]}!`;
    } else {
      direction = "Great Job!  Let's move on!";
    }

    return (
      <div>
        <div>
          {direction}
        </div>
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }
}
