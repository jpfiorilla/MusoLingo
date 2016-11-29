import React from 'react';
import { polySynth } from '../../instruments';
import { mapSoundsToPiano, mapSoundsToComputerKeyboard, selectKeysOnDOM, toggleKeyboardDisplay, mapSoundsToComputerKeyboardForGame } from '../../onScreenKeyboard';


export default class Keyboard extends React.Component {

  componentDidMount(){
    piano(document.querySelector("#keyboard"), {range: {startKey: "C", startOctave: 3, endKey: "B", endOctave: 4}});

    let keys = selectKeysOnDOM();
    mapSoundsToPiano(keys);
    mapSoundsToComputerKeyboard();
    // mapSoundsToComputerKeyboardForGame();
    toggleKeyboardDisplay();
  }

  render(){
    return (
      <div>
        <div id="showKeyboard">
          <img id="showKeyboard-icon" src="/images/piano-icon.png" />
          <div id="toggleKeyboard-text">Show</div>
        </div>
        <div id="keyboard" style={{display: 'none'}}></div>
      </div>
    )
  }
}
