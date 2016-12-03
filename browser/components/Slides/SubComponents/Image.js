import React from 'react';
import { Link, browserHistory } from 'react-router';
import Tone from 'tone';

let synth = new Tone.Synth().toMaster();

// NOTE: COMPONENT DESCRIPTION:

// this component displays images for the lesson

export default class Image extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      img: this.props && this.props.img,
      index: this.props && this.props.index || 0,
      tone: this.props && this.props.tone,
      divEl: this.props && this.props.div,
      style: this.props && this.props.style
    };
  }

  render() {

    let { img, index, tone, divEl, style } = this.state;


    if (tone) {
      let triggerPopUp = () => {
        document.getElementById(`click-me-popup-${index}`).style.display = "block";
      }
      let hidePopUp = () => {
        document.getElementById(`click-me-popup-${index}`).style.display = "none";
      }
      let note = "C4";
      let duration = tone.duration;
      let playSynth = () => {synth.triggerAttackRelease(note, duration)}
      return (
        <div style={(divEl) ? divEl.style : null} key={index}>
          <div id={`click-me-popup-${index}`}
            style={{display: "none", position: "relative", top: "30px", color: "red", fontSize: "smaller", fontWeight: "bold", fontFamily: "bebas-kai"}}>
            Click me
          </div>
          <img key={index} src={img} style={style} onClick={playSynth} onMouseOver={triggerPopUp} onMouseOut={hidePopUp} />
        </div>
      )
    }
    else {
      return (
        <div key={index}>
          <img key={index} src={img} style={style} />
        </div>
      );
    }
  }
}

// else if (obj.vex) {
//   let vexComponent = obj.vex.type;
//   obj.vex.type === 'SingleRhythmNote' ?
//   vexComponent = SingleRhythmNote : console.log('no vex type');
//   let info = obj.vex.info;
//   var staffId = 'staff' + obj.vex.num;
//   return (
//     <div key={index}>
//       {
//         React.createElement(vexComponent, {info, staffId})
//       }
//     </div>
//   )
// }
