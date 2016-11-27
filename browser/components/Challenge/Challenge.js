import React, {Component} from 'react';
import { startSequence, stopSequence } from '../../piano_hero';

import tonal from 'tonal';
import Vex from 'vexflow';

// this function is defined and exported outside of the component because we need startSequence to be able to update the state
// is there a way to export a dispatch function so that we're doing it through the store? is that a better practice than this approach?
export function pullScore(numCorrect){
  this.setState({numCorrect})
}

export function updateColor(vexNotes){
  this.setState({vexNotes})
}

var vexNotes, beams, stave, context, postMount;

export default class Challenge extends Component {
    constructor(props){
      super(props)
      // this.props.challenges.vexNotes = this.props.challenges.vexNotes.map(vexNote => {
      //   return vexNote.replace(/"/g,"")
      // })
      // console.log("IN CONSTRUCTOR", props)
      this.state = {
        numCorrect: null,
        vexNotes: [
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "8" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "8" })
        ]
      }
      pullScore = pullScore.bind(this);
      updateColor = updateColor.bind(this);
    }

    scorePercentage(notes){
      var totalNotes = notes.length;
      for (let i = 0; i < notes.length; i++){
        if (Array.isArray(notes[i])){
          totalNotes += notes[i].length
        }
      }
      return `${this.state.numCorrect/totalNotes}%`;
    }

    componentWillMount(){
      if (this.props.challenges.vexNotes){
        console.log("VEXNOOOOOOOTES!!!!!")
        updateColor(this.props.challenges.vexNotes)
      }
    }

    componentDidMount(){
      console.log("COMP DIDMOUNT RUNNING", this.props)
      var VF = Vex.Flow;
      var div = document.getElementById("staff")
      var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

      renderer.resize(500, 200);
      context = renderer.getContext();
      context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

      stave = new VF.Stave(10, 40, 400);

      stave.addClef("treble").addTimeSignature("4/4");

      stave.setContext(context).draw();

      var beams = VF.Beam.generateBeams(this.state.vexNotes);

      // this.state.vexNotes.forEach(note => note.setStyle({strokeStyle: "blue", fillStyle: "blue"}))
      // this.state.vexNotes[0].setStyle({strokeStyle: "blue", fillStyle: "blue"})

      Vex.Flow.Formatter.FormatAndDraw(context, stave, this.state.vexNotes);

      beams.forEach(function(b) {b.setContext(context).draw()})

      postMount = true;
      // Create a voice in 4/4 and add above notes
      // var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
      // voice.addTickables(notes);
      //
      // // Format and justify the notes to 400 pixels.
      // var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
      //
      // // Render voice
      // voice.draw(context, stave);
    }

    render() {
      const { notes, bpm } = this.props.challenges;
      // splitting eighth, triplets, and sixteenth notes into arrays for piano hero functions
      let noteSequence;
      if (notes){
        noteSequence = notes.map(note => {
          return note.split(" ")
        })
      }

      let scoreCounter;
      // console.log('RENDERING', this.state.numCorrect)
      if (this.state.numCorrect !== null) {
        scoreCounter = (
          <div><h2>{this.state.numCorrect} correct</h2></div>
        )
      }

      // let staffNotes;
      // if (vexNotes){
      //   staffNotes = vexNotes.map(vexNote => {
      //     return vexNote.replace(/"/g,"")
      //   })
      //   console.log("DESTRUNG VEXNOTES", staffNotes)
      // }

      if (postMount === true){
        Vex.Flow.Formatter.FormatAndDraw(context, stave, this.state.vexNotes)
        console.log("FORMATTED")
      }

      // console.log("STATE VEX", this.props.challenges.vexNotes)

        return (
        <div>
          <button type="button" name="button" id="startButton" onClick={() => startSequence(noteSequence, bpm, this.state.numCorrect, this.state.vexNotes)}>START</button>
          <button type="button" name="button" id="stopButton" onClick={stopSequence}>STOP</button>

        {scoreCounter}

        <div id="staff"></div>
        </div>
        )
    }
}
