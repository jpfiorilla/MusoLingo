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

export default class UserTextInput extends React.Component {

  constructor (props) {

    super (props);

    this.state = {
      userAnswer: '',
      correctAnswer: (this.props && this.props.correctAnswer) || '900',
      question: (this.props && this.props.question) || 'How old am I????',
      correctAnswerMessage: (this.props && this.props.correctAnswerMessage) || "Oh my god, that's right!",
      incorrectAnswerMessage: (this.props && this.props.incorrectAnswerMessage) ||
      "Some may say that answer is not correct.  HINT: I've been alive for 90 decades.",
      teacherResponse: undefined,
      open: false
    };

    this.onAnswerChange = this.onAnswerChange.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.answerFeedBack = this.answerFeedBack.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  onAnswerChange (e) {
    e.preventDefault();
    this.state.userAnswer = e.target.value;
  }

  handleOpen () {
    this.setState({open: true});
  }

  handleClose () {
    // this.setState({open: false});
    this.state.open = false;
    this.state.teacherResponse = undefined;
    this.forceUpdate();
  }

  checkAnswer () {

    if (! this.state.userAnswer) {
      // NOTE: do nothing
    } else if (this.state.userAnswer === this.state.correctAnswer) {
      this.answerFeedBack (this.state.correctAnswerMessage);
    } else {
      this.answerFeedBack (this.state.incorrectAnswerMessage);
    }
  }

  answerFeedBack (text) {

    this.state.open = true;

    const actions = [
      <FlatButton
        label="Got it!"
        primary={true}
        onClick={() => {this.handleClose; this.props.enable();}}
      />
    ];

    this.state.teacherResponse = (
      <div>
        <Dialog
          title="Teacher Feedback:"
          actions={actions}
          modal={false}
          open={this.state.open}>
          {text}
        </Dialog>
      </div>
    );
    this.forceUpdate();
  }

  render() {

    return (
      <div>
        <div>
          <h1>
            QUESTION
          </h1>
          <p>
            {this.state.question}
          </p>
        </div>
        <div>
          <TextField
            floatingLabelText="Answer Here!"
            onChange={this.onAnswerChange}
          />
        </div>
        <div>
          <RaisedButton label="Submit!" onClick={this.checkAnswer} />
        </div>

        {this.state.teacherResponse}

      </div>
    );
  }
}
