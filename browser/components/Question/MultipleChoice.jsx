import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RandomTrebleNote from '../vexflow/randomtreblenote';
import RandomTrebleInterval from '../vexflow/randomtrebleinterval';
import { getNoteName, vexToMidi, calculateInterval, randomIntervals, randomNoteName, randomOtherNoteNames } from '../../utils';
import  Vex from 'vexflow';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 10
  },
};

const RadioButtonExampleSimple = ({questionType}) => {
  console.log(questionType);
  if (questionType === "guessNoteName"){
    var questionComponent = RandomTrebleNote;
    var correct = randomNoteName(56, 75);
    var incorrect = randomOtherNoteNames(correct, 56, 67);
  } else if (questionType === "guessInterval"){
    questionComponent = RandomTrebleInterval;
    var lownote = randomNoteName(56, 75);
    var highnote = randomNoteName(vexToMidi(lownote), vexToMidi(lownote)+11);
    var intervalNotes = [lownote, highnote];
    correct = calculateInterval(intervalNotes);
    incorrect = randomIntervals(correct);
  }
  let rightAnswerPosition = Math.floor(Math.random() * 4);
  let ans = 1;
  let buttonsArray = ['', '', '', ''];
  let index = 0;
  return (
    <div>
      <div className="sheetmusic">
        {
          React.createElement(questionComponent, {note: correct, questionType, intervalNotes})
        }
        {/* <RandomTrebleNote questionType={questionType} note={correct} intervalNotes={[lownote, highnote]} /> */}
      </div>
      {/* MULTIPLE CHOICE BUTTONS */}
      <RadioButtonGroup name="shipSpeed" defaultSelected="1">
      {
        buttonsArray.map((button, idx) => {
          let correctness = rightAnswerPosition === idx ? correct : incorrect[index++];
          return (
            <RadioButton value={idx} label={correctness} style={styles.radioButton} />
          )
        })
      }
      </RadioButtonGroup>
    </div>
    )
};

export default RadioButtonExampleSimple;