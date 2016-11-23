import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RandomTrebleNote from '../vexflow/randomtreblenote';
import RandomTrebleInterval from '../vexflow/randomtrebleinterval';
import RandomChord from '../vexflow/randomchord';
import RandomRhythmNote from '../vexflow/randomrhythmnote';
import { getNoteName, vexToMidi, calculateInterval, randomIntervals, randomNoteName, randomOtherNoteNames, randomTriad, randomOtherTriads, randomNoteDuration, randomOtherNoteDurations } from '../../utils';
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
    console.log('multichoice props', this.props);
    
    this.state = {
      type: this.props.questionType,
      answered: false,
      correctAnswer: '',
      userNumCorrect: 0
    }
    this.onAnswerSelection = this.onAnswerSelection.bind(this);
  }

  componentWillMount() {
    switch (this.props.questionType) {
      case "guessNoteName":
        questionComponent = RandomTrebleNote;
        correct = randomNoteName(56, 75);
        incorrect = randomOtherNoteNames(correct, 56, 67);
        this.setState({ correctAnswer: correct })
        correct = getNoteName(correct);
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
      case "rhythmNote":
        questionComponent = RandomRhythmNote;
        correct = randomNoteDuration();
        incorrect = randomOtherNoteDurations(correct);
        correct = getNoteName(correct);
        console.log(correct);
      default:
        console.log("No question type defined")
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.userNumCorrect === nextState.userNumCorrect;
  // }

  onAnswerSelection(rightAnswerPosition, idx) {
    console.log("HIT")
    let answerArr = ["#mca-0", "#mca-1", "#mca-2", "#mca-3"]
    let divArr = ["#radio0", "#radio1", "#radio2", "#radio3"]

    let correct = answerArr.splice(rightAnswerPosition, 1);
    let incorrect = answerArr;
    let selected = "#mca-" + idx;
    if (idx !== rightAnswerPosition) $(selected).addClass("wrong-answer")
    else {
      console.log('user props', this.props)
      this.props.addKeys(this.props.user.id, 1)
    }
    console.log(this.state);
    $(correct[0]).addClass("right-answer")
    answered = true;
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
        {
          incorrect.length && buttonsArray.map((button, idx) => {
            let correctness = rightAnswerPosition === idx ? correct : incorrect[index++];
            console.log("correct answer: ", correct);
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