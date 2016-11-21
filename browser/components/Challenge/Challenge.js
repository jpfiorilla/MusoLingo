import React, {Component} from 'react';
import { startSequence, stopSequence } from '../../piano_hero';

import tonal from 'tonal';

export default class Challenge extends Component {

    constructor(){
      super()
      this.state = {
        numCorrect: null
      }
    }

    render() {
      let scoreCounter;
      if (this.state.numCorrect !== 'null') {
        scoreCounter = (
          <div><h2>{this.state.numCorrect} correct</h2></div>
        )
      }
        return (
        <div>
          <button type="button" name="button" id="startButton" onClick={() => startSequence(["C4", ["D4", "E4", "F4"], "G4", ["A4", "G4"]], 80, this.state.numCorrect)}>START</button>
          <button type="button" name="button" id="stopButton" onClick={stopSequence}>STOP</button>
          <div id="circle"></div>

        {scoreCounter}
        </div>
        )
    }
}
