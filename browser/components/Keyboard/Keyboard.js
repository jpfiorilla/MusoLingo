import React from 'react';
import { polySynth } from '../../instruments';
import { mapSoundsToPiano, mapSoundsToComputerKeyboard } from '../../onScreenKeyboard';


export default class Keyboard extends React.Component {

  componentDidMount(){
    piano(document.querySelector("#keyboard"), {range: {startKey: "C", startOctave: 3, endKey: "B", endOctave: 4}});

    mapSoundsToPiano();
    mapSoundsToComputerKeyboard();

    // var middleC = document.querySelector(".C3");
    // middleC.onmousedown = function (){
    //   polySynth.triggerAttack("C3")
    // }
    //
    // middleC.onmouseup = function (){
    //   polySynth.triggerRelease("C3");
    // }
    //
    // var middleD = document.querySelector(".D3")
    // middleD.onmousedown = function (){
    //   polySynth.triggerAttack("D3")
    // }
    // middleD.onmouseup = function (){
    //   polySynth.triggerRelease("D3")
    // }
  }

  render(){
    return (
      <div>
      <div id="keyboard"></div>
      {/* <div className="container">
        <div className="top">
          <div className="l-speak">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
          <div className="pads">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="r-speak">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
          </div>
          <div className="keys">
             <ul>
                <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
                <li className="black"></li>
               <li className="white"></li>
            </ul>
          </div>
          </div>
        </div> */}
      </div>
    )
  }
}
