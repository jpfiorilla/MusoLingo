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
        <RadioButton
          value="1"
          label={correct}
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