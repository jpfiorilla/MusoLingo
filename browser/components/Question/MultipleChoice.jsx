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
    marginBottom: 10
  },
};

const RadioButtonExampleSimple = ({questionType}) => {
  console.log(questionType);
  if (questionType === "guessNoteName"){
      var questionComponent = RandomTrebleNote;
      var correct = randomNoteName(56, 75);
      var incorrect = randomOtherNoteNames(correct, 56, 67);
      console.log('correct', correct);
  } else if (questionType === "guessInterval"){
      questionComponent = RandomTrebleInterval;
      var lownote = randomNoteName(56, 75);
      var highnote = randomNoteName(vexToMidi(lownote), vexToMidi(lownote)+11);
      var intervalNotes = [lownote, highnote];
      correct = calculateInterval(intervalNotes);
      incorrect = randomIntervals(correct);
      console.log('correct', correct);
  } else if (questionType === "guessChordName"){
      questionComponent = RandomChord;
      var correctArr = randomTriad(56, 75);
      correct = correctArr[1];
      var correctChord = correctArr[0];
      incorrect = [];
      var incorrectChords = randomOtherTriads(correctArr[1]);
      incorrectChords.forEach(chord => incorrect.push(chord));
      console.log('correct', correct);
  } else if (questionType === 'rhythmNote'){
      questionComponent = RandomRhythmNote;
      correct = randomNoteDuration();
      incorrect = randomOtherNoteDurations(correct);
  }
  let rightAnswerPosition = Math.floor(Math.random() * 4);
  let buttonsArray = ['', '', '', ''];
  let index = 0;
  return (
    <div>
      <div className="sheetmusic">
        {
          React.createElement(questionComponent, {note: correct, questionType, intervalNotes, chord: correctChord, rhythmnote: correct})
        }
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