import React from 'react';
import { Link, browserHistory } from 'react-router'
import CircularProgress from 'material-ui/CircularProgress';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class SlidesComponent extends React.Component {

  constructor () {
    super();
    this.state = {
      hide: 'hidden',
      finished: false,
      stepIndex: 0,
    };
  }
  handleNext () {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  }
  handlePrev () {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  }
  componentWillMount () {
    if (! this.props.slides.length) {
      this.state.hide = '';
    }
  }
  componentWillReceiveProps () {
    this.state.hide = 'hidden';
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onTouchTap={this.handleNext}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onTouchTap={this.handlePrev}
          />
        )}
      </div>
    );
  }
  render () {
    const {finished, stepIndex} = this.state;

    return (
      <div>
        <div className={this.state.hide}>
          <CircularProgress />
        </div>
        <div className="">
          {/*
            each slide has:
            title, lessonttext, number.

            We need to display the slides in order of their number.
            We should really sort the slides by number beforehand.
            */}
            <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
              <Stepper activeStep={stepIndex} orientation="vertical">
                <Step></Step>
                {
                  this.props.slides.length && this.props.slides.map((slide, index) => {
                    console.log(typeof index);
                    return (
                      <Step>
                        <StepLabel>{slide.title}</StepLabel>
                        <StepContent>
                          <p>
                            {slide.lessonttext}
                          </p>
                          {this.renderStepActions(index)}
                        </StepContent>
                      </Step>
                    )
                  })
                }
              </Stepper>
              {finished && (
                <p style={{margin: '20px 0', textAlign: 'center'}}>
                  <a href="#" onClick={(event) => {
                    event.preventDefault();
                    this.setState({stepIndex: 0, finished: false});
                  }}> Click here
                </a> to reset the example.
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }
}
