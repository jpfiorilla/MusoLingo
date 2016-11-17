import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RandomTrebleNote from '../vexflow/randomtreblenote';
import RandomTrebleInterval from '../vexflow/randomtrebleinterval';
import { getNoteName, randomTrebleNoteName, randomOtherTrebleNoteNames } from '../../utils';
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
  // console.log(questionType, typeof(questionType));
  if (questionType === "guessNoteName"){
    var correct = randomTrebleNoteName(58, 75);
    console.log(correct);
    var incorrect = randomOtherTrebleNoteNames(correct, 58, 69);
    console.log(incorrect);
    var questionComponent = RandomTrebleNote;
  } else if (questionType === "guessInterval"){
    var lownote = randomTrebleNoteName();
    var highnote = randomTrebleNoteName(lownote);
    var questionComponent = RandomTrebleInterval;
    console.log(highnote);
  }
  // var lownote = randomTrebleNoteName();
  // console.log(lownote);
  // var highnote = randomTrebleNoteName(lownote);
  // console.log(highnote);
  return (
    <div>
      <div className="sheetmusic">
        {
          React.createElement(questionComponent, {note: correct, questionType})
        }
        {/* <RandomTrebleNote questionType={questionType} note={correct} /> */}
      </div>
      {/* MULTIPLE CHOICE BUTTONS */}
      <RadioButtonGroup name="shipSpeed" defaultSelected="1">
        <RadioButton
          value="1"
          label={getNoteName(correct)}
          style={styles.radioButton}
          />
        <RadioButton
          value="2"
          label={incorrect[0]}
          style={styles.radioButton}
        />
        <RadioButton
          value="3"
          label={incorrect[1]}
          style={styles.radioButton}
        />
        <RadioButton
          value="4"
          label={incorrect[2]}
          style={styles.radioButton}
        />
      </RadioButtonGroup>
    </div>
    )
};

export default RadioButtonExampleSimple;