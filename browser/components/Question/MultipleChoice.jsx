import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import RandomTrebleNote from '../vexflow/randomtreblenote';
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

const RadioButtonExampleSimple = () => {
  let note = randomTrebleNoteName();
  let otherNotes = randomOtherTrebleNoteNames(note);
  return (
    <div>
      <RandomTrebleNote note={note} />
      {/* MULTIPLE CHOICE BUTTONS */}
      <RadioButtonGroup name="shipSpeed" defaultSelected="1">
        <RadioButton
          value="1"
          label={getNoteName(note)}
          style={styles.radioButton}
          />
        <RadioButton
          value="2"
          label={otherNotes[0]}
          style={styles.radioButton}
        />
        <RadioButton
          value="3"
          label={otherNotes[1]}
          style={styles.radioButton}
        />
        <RadioButton
          value="4"
          label={otherNotes[2]}
          style={styles.radioButton}
        />
      </RadioButtonGroup>
    </div>
    )
};

export default RadioButtonExampleSimple;