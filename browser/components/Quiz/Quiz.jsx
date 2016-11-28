import React from 'react';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ExpandTransition from 'material-ui/internal/ExpandTransition'
import TextField from 'material-ui/TextField'
import {MultipleChoiceContainer} from "../Question/QuestionContainer"
import MultipleChoice from '../Question/MultipleChoice';
import TextInput from "../Question/TextInput"
import ReactPlayer from "react-player"

// Material CSS rules
const centerText = {marginLeft: "10%"}

export default class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            finished: false,
            stepIndex: 0,
            quizzes: this.props.quizzes
        }
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
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
    };

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
                        <MultipleChoiceContainer questionType={this.props.quizzes[0].question_types[this.state.stepIndex]}  />
                    </div>
                </div>
            );
        /*switch (stepIndex) {
        case 1:
            return (
                <div>
                    <div>
                        <TextInput />
                    </div>
                    <p>
                        Select campaign settings. Campaign settings can include your budget, network, bidding
                        options and adjustments, location targeting, campaign end date, and other settings that
                        affect an entire campaign.
                    </p>
                </div>
            );
        case 0:
        // questionType = rhythmNote || guessNoteName || guessInterval || guessChordName
            return (
                <div>
                    <p>Here is a multiple choice example:</p>
                    <div style={{marginLeft: "10%"}}>
                        <MultipleChoice questionType={this.props.quizzes[0].question_types[this.state.stepIndex]} />
                    </div>
                </div>
            );
        case 2:
            return (
            <p>
                Try out different ad text to see what brings in the most customers, and learn how to
                enhance your ads using features like ad extensions. If you run into any problems with your
                ads, find out how to tell if they're running and how to resolve approval issues.
            </p>
            );
        default:
            return 'You\'re a long way from home sonny jim!';
        }*/
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
{/*                    <div className="col-md-6">
                        <FlatButton
                            label="Back"
                            disabled={stepIndex === 0}
                            onClick={this.handlePrev}
                            style={{marginRight: 12}}
                        />
                    </div>*/}
                    <div id="next-button" className="col-md-6 text-right">
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
        // console.log('props', this.props, 'state', this.state)
        const {loading, stepIndex} = this.state;

        let allQuizzes;
        if (this.props.quizzes.length){
            allQuizzes = (
                <Stepper activeStep={stepIndex}>
                {
                    this.props.quizzes[0].question_types.map(question => {
                        return (
                            <Step>
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
                <ReactPlayer style={{left: "73%", position: "absolute", top: "45%"}} loop="true" width="300" height="200" url="/movies/beathoven-1.mp4" playing />
                <div className="bad-job" id="beathoven-good-job">
                    <ReactPlayer style={{left: "10%", top: "50%", position: "absolute"}} loop="true" width="300" height="300" url="/movies/good-job.mp4" playing />
                </div>
                {
                    allQuizzes
                }
                {/*<Stepper activeStep={stepIndex}>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                <Step>
                    <StepLabel></StepLabel>
                </Step>
                </Stepper>*/}
                <ExpandTransition loading={loading} open={true}>
                    {this.renderContent()}
                </ExpandTransition>
            </div>
        );
    }
}

// STEPPER?
