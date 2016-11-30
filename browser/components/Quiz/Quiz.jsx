import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ExpandTransition from 'material-ui/internal/ExpandTransition'
import TextField from 'material-ui/TextField'
import { MultipleChoiceContainer } from "../Question/QuestionContainer"
import MultipleChoice from '../Question/MultipleChoice';
import TextInput from "../Question/TextInput"
import ReactPlayer from "react-player"

// Material CSS rules
const centerText = {marginLeft: "10%"}

export default class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
      correct: 0,
      grade: 0
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.addOneForRight = this.addOneForRight.bind(this);
  }

  addOneForRight (right) {
    if (right) {
      this.state.correct ++;
      this.state.grade = this.state.correct / this.props.quizzes[0].question_types.length;
    }
  }

  dummyAsync(cb) {
    this.setState({ loading: true }, () => {
      this.asyncTimer = setTimeout(cb, 500);
    })
  }

  handleNext(){
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= this.props.quizzes[0].question_types.length-1,
      }));
    }

    // ADDS COMPLETED QUIZ
    if (this.state.stepIndex === this.props.quizzes[0].question_types.length - 1){

      // If user passed the test (> 60% right), add quiz id to completed quizzes array
      if (this.state.grade >= .6) {
  LEFT OFF HERE
        this.props.addQuizz(this.props.user.id, this.props.quizzes[0].quiz_id)
      }
    }
  }

  handlePrev(){
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    return (
      <div id="multiplechoice-container">
        <div style={{marginLeft: "10%"}}>
          <MultipleChoiceContainer
            rightOrWrong={this.addOneForRight}
            questionType={this.props.quizzes[0].question_types[this.state.stepIndex]}
          />
        </div>
      </div>
    );
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
              >
                Click here
              </a> to reset the example.
            </p>
          </div>
        );
      }

      return (
        <div style={contentStyle}>
          <div className="row">

            <div className= "text-right" >
              <button id="hint-button" type="button">?</button>
            </div>

          </div>
          <div>{(this.props.quizzes.length) ? this.getStepContent(stepIndex) : <p>Quiz length is empty</p>}</div>
          <div style={{ marginTop: 24, marginBottom: 12 }}>
            <div className="row">
              <div id="next-button" className="col-xs-6 col-sm-6 col-md-6 text-right">
                <RaisedButton
                  label='Next'
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
    render() {

      const {loading, stepIndex} = this.state;

      let allQuizzes;
      if (this.props.quizzes.length){
        allQuizzes = (
          <Stepper activeStep={stepIndex}>
            {
              this.props.quizzes[0].question_types.map((question, index) => {
                return (
                  <Step key={index}>
                    <StepLabel></StepLabel>
                  </Step>
                )
              })
            }
          </Stepper>
        )
      }

      return (
        <div id="quiz-body" style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
          <ReactPlayer style={{left: "73%", position: "absolute", top: "45%"}} loop={true} width={300} height={200} url="/movies/beathoven-1.mp4" playing />
          <div className="bad-job" id="beathoven-good-job">
            <ReactPlayer style={{left: "10%", top: "50%", position: "absolute"}} loop={true} width={300} height={300} url="/movies/good-job.mp4" playing />
          </div>
          {
            allQuizzes
          }
          <ExpandTransition loading={loading} open={true}>
            {this.renderContent()}
          </ExpandTransition>
        </div>
      );
    }
  }
