import React, {Component} from 'react';

// should render both the current measure and the current beat
export default class MetronomeCounter extends Component {
  render (){
    const { beat, measure } = this.props.rhythm

    let counter;
    if (beat && measure >= 0) {
      counter = measure > 0 ? (
        <div>Current Measure and Beat: {measure}::{beat}</div>
      ) :
      (
        <div>START PLAYING IN: {Math.abs(beat - 5)}</div>
      )
    }
    return (
      <div>
        {counter}
      </div>
    )
  }
}
