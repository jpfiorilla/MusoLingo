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

export default class SlidesComponent extends React.Component {

  constructor () {
    super ();
    this.state = {
      finished: false,
      stepIndex: 0,
      staffNum: 0
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.textOrImage = this.textOrImage.bind(this);
    this.jsxBold = this.jsxBold.bind(this);
  }

  handleNext () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= this.props.slides.length - 1,
    });
  };

  handlePrev () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  jsxBold (text) {
    // The default is p.
    // We build a string as we go aong for the p tag.
    // if we encounter and < tag we end the current p string and build
    // a b string until we hit the < tag.
    // then we add the b to the array and start the p until.

    var retArr = [];
    var index = 0;
    var elType = 'p';
    var subStr = '';

    while (index < text.length) {
      if (text[index] === '<') {
        // check if it's an opening or closing tag.
        //
        // if it's an opening tag then return the current p and start building the b.
        // it it's a closing tag then return the current b and start building the new p.
        //
        // update the index and go until the end.
        if (text.slice(index, index + 3) === '<b>') {
          retArr.push(React.createElement(elType, {style: {display : 'inline'}}, subStr));
          subStr = '';
          elType = 'b';
          index += 3;
        } else { // closing tag, return the b.
          retArr.push(React.createElement(elType, {style: {display : 'inline'}}, subStr));
          subStr = '';
          elType = 'p';
          index += 4;
        }
      } else {
        subStr += text[index];
        index ++;
      }
    }
    if (subStr) {
      retArr.push(React.createElement('p', {style: {display : 'inline'}}, subStr));
    }
    return retArr;
  }
  textOrImage (obj, index) {

    if (obj.text) {
      var y = this.jsxBold(obj.text);
      return (
        <div>
          {y}
        </div>
      );
    } else if (obj.img) {
      return (
        <div>
          <img key={index} src={obj.img} />
        </div>
      );
    } else if (obj.vex) {
      let vexComponent = obj.vex.type;
      obj.vex.type === 'SingleRhythmNote' ?
      vexComponent = SingleRhythmNote : console.log('no vex type');
      let info = obj.vex.info;
      var staffId = 'staff' + obj.vex.num;
      return (
        <div key={index}>
          {
            React.createElement(vexComponent, {info, staffId})
          }
        </div>
      )

      /* return (
      <div>
      <div key={index} id={staffId}></div>
    </div>
  ) */
}
}
render() {
  const {finished, stepIndex} = this.state;
  const contentStyle = {margin: '0 16px'};

  let linearStepper;

  if (this.props.slides.length) {
    linearStepper = (
      <Stepper activeStep={stepIndex}>
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
    <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>

      { linearStepper }

      <div style={contentStyle}>
        {finished ? (
          <p>
            <a href="#" onClick={(event) => {
              event.preventDefault();
              this.setState({stepIndex: 0, finished: false});
            }}>
            Replay the slides
          </a>
        </p>
      ) : (
        <div style={{textAlign: 'center'}}>
          {
            this.props.slides.length && this.props.slides[stepIndex].slideContent.map((stuff, index) => {
              return this.textOrImage(stuff, index);
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
              onClick={this.handleNext}
            />
          </div>
        </div>
      )}
    </div>
  </div>
);
}
}
