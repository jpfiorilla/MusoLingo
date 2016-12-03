import React from 'react';
import { Link, browserHistory } from 'react-router'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SingleRhythmNote from '../vexflow/singlerhythmnote';
const currSlide = 'currSlide';

let overallIndex = 0;

// NOTE: SUBCOMPONENTS %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
import ExternalRefs from './SubComponents/ExternalRefs';
import PianoUserInput from './SubComponents/PianoUserInput';
import PlayAudio from './SubComponents/PlayAudio';
import Text from './SubComponents/Text';
import UserTextInput from './SubComponents/UserTextInput';
import Image from './SubComponents/Image';
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^


export default class SlidesComponent extends React.Component {

  constructor () {
    super ();
    this.state = {
      finished: false,
      stepIndex: 0,
      staffNum: 0,
      disabled: false,
      setDisable: true
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.whatShouldWeRender = this.whatShouldWeRender.bind(this);
    this.goToQuiz = this.goToQuiz.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  enableButton () {
    this.setState({disabled: false, setDisable: false})
  }

  componentWillUnmount () {
    this.props.clearSlides();
    localStorage.setItem(currSlide, 0);
    Mousetrap.unbind([`right`], this.handleNext);
  }

  componentDidMount () {
    // NOTE: update localStorage with slide Number.
    this.state.stepIndex = +localStorage.getItem(currSlide);
    if (! this.state.stepIndex) {
      this.state.stepIndex = 0;
    }
    Mousetrap.bind([`right`], this.handleNext);
  }

  goToQuiz () {
    this.props.askForQuiz(this.props.slides[0].lesson_id);
    browserHistory.push('/quiz');
  }

  handleNext () {
    const {stepIndex} = this.state;

    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.props.slides.length - 1,
      setDisable: true
    });
    localStorage.setItem(currSlide, this.state.stepIndex + 1);
    if (stepIndex >= this.props.slides.length - 1) {
      localStorage.setItem(currSlide, 0);
    }
  };

  handlePrev () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1, setDisable: true});
      localStorage.setItem(currSlide, this.state.stepIndex - 1);
    }
  };

  whatShouldWeRender (obj, index) {
    console.log('back inside');

    let subComponent;

    if (obj.text) {
      subComponent =
      <Text
        text={obj.text}
        index={index}
      />
  } else if (obj.img) {
    subComponent =
    <Image
      img={obj.img}
      index={index}
      tone={obj.tone}
      div={obj.div}
      style={obj.style}
    />;
  } else if (obj.externalRef) {
    let refs = obj.externalRef;
    subComponent =
    <ExternalRefs
      link={refs.link}
      linkDisplay={refs.linkDisplay}
      description={refs.description}
    />;
  } else if (obj.pianoUserInput) {
    if (this.state.setDisable) {
      this.state.disabled = true;
    }
    let refs = obj.pianoUserInput;
    subComponent =
    <PianoUserInput
      notesToPlay={refs.notesToPlay}
      enable={this.enableButton}
    />;
  } else if (obj.audioLink) {
    let refs = obj.audioLink;
    subComponent =
    <PlayAudio
      source={refs.source}
      type={refs.type}
      description={refs.description}
    />;
  } else if (obj.userTextInput) {
    if (this.state.setDisable) {
      this.state.disabled = true;
    }
    let refs = obj.userTextInput;
    subComponent =
    <UserTextInput
      correctAnswer={refs.correctAnswer}
      question={refs.question}
      correctAnswerMessage={refs.correctAnswerMessage}
      incorrectAnswerMessage={refs.incorrectAnswerMessage}
      enable={this.enableButton}
    />;
  }

  overallIndex ++;
  return (
    <div key={overallIndex}>
      {subComponent}
    </div>
  );

}

render() {
  const {finished, stepIndex} = this.state;
  const contentStyle = {margin: '0 16px'};

  let linearStepper;

  if (this.props.slides.length) {
    linearStepper = (
      <Stepper style={{overflowY: "hidden", overflowX: "scroll", marginBottom: "40px", fontFamily: "bebas-kai"}} activeStep={stepIndex}>
        {
          this.props.slides.map((slide, index) => {
            return (
              <Step key={index}>
                <StepLabel>{slide.title}</StepLabel>
              </Step>
            );
          })
        }
      </Stepper>
    )
  }
  return (
    <div className="slides-container">

      { linearStepper }

      <div style={contentStyle}>
        {finished ? (
          <div style={{textAlign: "center", marginBottom: "20px"}}>
            <p style={{display: "inline-block", marginRight: "15px", cursor: "pointer", fontWeight: "bold"}} onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: 0, finished: false});
            }}>
            Replay Slides
          </p>
          |
          <p style={{display: "inline-block", marginLeft: "15px", cursor: "pointer", fontWeight: "bold"}} onClick={this.goToQuiz}>Go to Quiz</p>
        </div>
      ) : (
        <div style={{textAlign: 'center'}}>
          {
            this.props.slides.length && this.props.slides[this.state.stepIndex].slideContent.map((stuff, index) => {
              return this.whatShouldWeRender(stuff, index);
            })
          }
          <div style={{marginTop: 12}}>
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onClick={this.handlePrev}
              style={{marginRight: 12}}
            />
            <RaisedButton
              label={stepIndex === this.props.slides.length - 1 ? 'Finish' : 'Next'}
              primary={true}
              disabled={this.state.disabled}
              onClick={() => {
                if (stepIndex === this.props.slides.length - 1 && this.props.user.completed) {
                  this.props.user.completed.lessons[this.props.slides[0].lesson_id] = 'We did it!';
                  this.props.user.completed.keys += 1;
                  this.props.completed(this.props.user.completed, 'completed', this.props.user.id);
                  localStorage.setItem(currSlide, 0);
                  this.forceUpdate();
                }
                this.handleNext();
              }}
            />
          </div>
        </div>
      )}
    </div>
  </div>);
}
}
