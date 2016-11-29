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

    $("#keyboard").draggable();
  }

  render(){
    return (
      <div>
        <div id="showKeyboard">
          <img id="showKeyboard-icon" src="/images/piano-icon.png" />
          <div id="toggleKeyboard-text">Show</div>
        </div>
        <div id="keyboard" className="ui-widget-content" style={{display: 'none'}}>
          <div id="keyboard-help">?
            <div id="keyboard-help-text">Click and drag me to reposition</div>
          </div>
        </div>
      </div>
    )
  }
}