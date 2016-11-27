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
        <button id="showKeyboard">Show Keyboard</button>
        <div id="keyboard" style={{display: 'none'}}></div>
      </div>
    )
  }
}
