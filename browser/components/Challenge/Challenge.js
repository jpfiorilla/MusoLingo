import React, {Component} from 'react';
import { startSequence, stopSequence } from '../../piano_hero';

import tonal from 'tonal';

// this function is defined and exported outside of the component because we need startSequence to be able to update the state
// is there a way to export a dispatch function so that we're doing it through the store? is that a better practice than this approach?
export function pullScore(numCorrect){
  this.setState({numCorrect})
}

export default class Challenge extends Component {
    constructor(){
      super()
      this.state = {
        numCorrect: null
      }
      pullScore = pullScore.bind(this);
    }

    pullScore(numCorrect) {
      this.setState({numCorrect})
    }

    componentDidMount(){
      var circle = document.getElementById('circle');
    }

    render() {
      let scoreCounter;
      console.log('RENDERING', this.state.numCorrect)
      if (this.state.numCorrect !== null) {
        scoreCounter = (
          <div><h2>{this.state.numCorrect} correct</h2></div>
        )
      }
      
      console.log(this.props)

        return (
        <div>
          <button type="button" name="button" id="startButton" onClick={() => startSequence(["C3","C3","C3","D3","E3","F3"], 80, this.state.numCorrect)}>START</button>
          <button type="button" name="button" id="stopButton" onClick={stopSequence}>STOP</button>
          <div id="circle"></div>

        {scoreCounter}
        </div>
        )
    }
}
