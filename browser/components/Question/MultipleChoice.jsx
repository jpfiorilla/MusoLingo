import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RandomTrebleNote from '../vexflow/randomtreblenote';
import RandomTrebleInterval from '../vexflow/randomtrebleinterval';
import RandomChord from '../vexflow/randomchord';
import { getNoteName, vexToMidi, calculateInterval, randomIntervals, randomNoteName, randomOtherNoteNames, randomTriad, randomOtherTriads } from '../../utils';
import  Vex from 'vexflow';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 10,
    fill: "red"
  },
};

var questionComponent, correct, incorrect, intervalNotes, correctChord, buttonsArray, rightAnswerPosition, index;
let answered = false;

export default class MultipleChoiceQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.questionType,
      answered: false,
      correctAnswer: '',
      userNumCorrect: 0
    }
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
    this.getColor = this.getColor.bind(this);
  }

  componentWillMount() {
    switch (this.state.type) {
      case "guessNoteName":
        questionComponent = RandomTrebleNote;
        correct = randomNoteName(56, 75);
        incorrect = randomOtherNoteNames(correct, 56, 67);
        this.setState({ correctAnswer: correct })
        break;
      case "guessInterval":
        questionComponent = RandomTrebleInterval;
        var lownote = randomNoteName(56, 75);
        var highnote = randomNoteName(vexToMidi(lownote), vexToMidi(lownote) + 11);
        var intervalNotes = [lownote, highnote];
        correct = calculateInterval(intervalNotes);
        incorrect = randomIntervals(correct);
        this.setState({correctAnswer: correct})
        break;
      case "guessChordName":
        questionComponent = RandomChord;
        var correctArr = randomTriad(56, 75);
        correct = correctArr[1];
        console.log(correct);
        correctChord = correctArr[0];
        incorrect = [];
        var incorrectChords = randomOtherTriads(correctArr[1]);
        incorrectChords.forEach(chord => incorrect.push(chord));
        this.setState({ correctAnswer: correct })
        break;
      default:
        console.log("No question type defined")
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.userNumCorrect === nextState.userNumCorrect;
  }

  onAnswerSelection(rightAnswerPosition, idx) {
    let answerArr = ["#mca-0", "#mca-1", "#mca-2", "#mca-3"]
    let divArr = ["#radio0", "#radio1", "#radio2", "#radio3"]

    let correct = answerArr.splice(rightAnswerPosition, 1);
    let incorrect = answerArr;
    let selected = "#mca-" + idx;
    if (idx !== rightAnswerPosition) $(selected).addClass("wrong-answer")
    else this.setState({ userNumCorrect: this.state.userNumCorrect++ })
    console.log(this.state);
    $(correct[0]).addClass("right-answer")
    answered = true;
  }

  getColor(rightAnswerPosition, idx, correctness) {
    if (idx === rightAnswerPosition) return "green"
    else return "red"
  }

  render() {
    var {correctAnswer, type} = this.state;
    rightAnswerPosition = Math.floor(Math.random() * 4);
    buttonsArray = ['', '', '', ''];
    index = 0;

    return (
      <div>
        <div className="sheetmusic">
          {
            React.createElement(questionComponent, {note: correctAnswer, type, intervalNotes, chord: correctChord})
          }
        </div>
        {/* MULTIPLE CHOICE BUTTONS */}
        

        {/*<div className="custom-controls-stacked" onChange={(event, value, x) => { console.log(event, value, x) } }>
            <label id="example" className="custom-control custom-radio">
              <input id="radioStacked1" value="hello" name="radio-stacked" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Toggle this custom radio</span>
          </label>
          
            <label id="example2" className="custom-control custom-radio">
              <input id="radioStacked1" name="radio-stacked" type="radio" className="custom-control-input" />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">Toggle this custom radio</span>
            </label>
        </div>*/}


        {
          buttonsArray.map((button, idx) => {
            let correctness = rightAnswerPosition === idx ? correct : incorrect[index++];
            return (
              <div id={`radio${idx}`} key={idx}
                onClick={() => { (answered) ? null : this.onAnswerSelection(rightAnswerPosition, idx) } }>
                <div id={`mca-${idx}`} className="multiple-choice-ans" key={idx}>{correctness}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

}