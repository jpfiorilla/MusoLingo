import React, {Component} from 'react';
import { startSequence, stopSequence } from '../../piano_hero';

import tonal from 'tonal';
import Vex from 'vexflow';

// this function is defined and exported outside of the component because we need startSequence to be able to update the state
// is there a way to export a dispatch function so that we're doing it through the store? is that a better practice than this approach?

var vexNotes, beams, stave, context, postMount;

export default class Challenge extends Component {
    constructor(props){
      super(props)
      // this.props.challenges.vexNotes = this.props.challenges.vexNotes.map(vexNote => {
      //   return vexNote.replace(/"/g,"")
      // })
      // console.log("IN CONSTRUCTOR", props)
      this.state = {
        vexNotes:
        // this.props.challenges.vexNotes
        [
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["d/4"], duration: "q" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "8" }),
          new Vex.Flow.StaveNote({clef: "treble", keys: ["c/4"], duration: "8" })
        ]
      }
    }

    scorePercentage(notes){
      var totalNotes = notes.length;
      for (let i = 0; i < notes.length; i++){
        if (Array.isArray(notes[i])){
          totalNotes += notes[i].length
        }
      }
      return `${this.props.score/totalNotes}%`;
    }

    componentWillMount(){
      // if (postMount === true){
      //   console.log("WILL MOUNT")
      //   let staffNotes = this.state.vexNotes.map(vexNote => {
      //     return vexNote.replace(/"/g,"")
      //   })
      //   Vex.Flow.Formatter.FormatAndDraw(context, stave, staffNotes)
      // }
    }

    componentDidMount(){
      console.log("COMP DIDMOUNT RUNNING", this.props)
      // var VF = Vex.Flow;
      // var div = document.getElementById("staff")
      // var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
      //
      // renderer.resize(500, 200);
      // context = renderer.getContext();
      // context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
      //
      // stave = new VF.Stave(10, 40, 400);
      //
      // stave.addClef("treble").addTimeSignature("4/4");
      //
      // stave.setContext(context).draw();
      //
      // var beams = VF.Beam.generateBeams(this.state.vexNotes);
      //
      // Vex.Flow.Formatter.FormatAndDraw(context, stave, this.state.vexNotes);
      //
      // beams.forEach(function(b) {b.setContext(context).draw()})

      // postMount = true;
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

    componentDidUpdate(){
      // if (postMount !== true){
      //   var VF = Vex.Flow;
      //   var div = document.getElementById("staff")
      //   var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
      //
      //   renderer.resize(500, 200);
      //   context = renderer.getContext();
      //   context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
      //
      //   stave = new VF.Stave(10, 40, 400);
      //
      //   stave.addClef("treble").addTimeSignature("4/4");
      //
      //   stave.setContext(context).draw();
      //
      // }

      if (this.props.challenges.vexNotes && postMount !== true){
        var VF = Vex.Flow;
        var div = document.getElementById("staff")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        renderer.resize(500, 200);
        context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        stave = new VF.Stave(10, 40, 400);

        stave.addClef("treble").addTimeSignature("4/4");

        stave.setContext(context).draw();

        var staffNotes = [];
        console.log("did update vexnotes props", this.props.challenges.vexNotes)

        this.props.challenges.vexNotes.forEach(vexNote =>{
          staffNotes.push(new Vex.Flow.StaveNote(vexNote))
        })
        console.log("STAFFNOTES DID UPDATE", staffNotes)

        beams = Vex.Flow.Beam.generateBeams(staffNotes);

        Vex.Flow.Formatter.FormatAndDraw(context, stave, staffNotes);

        beams.forEach(function(b) {b.setContext(context).draw()})

        postMount = true;
      }
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
      if (this.props.score !== null) {
        scoreCounter = (
          <div><h2>{this.props.score} correct</h2></div>
        )
      }

// this next chunk of code is currently drawing a new set of notes over the original set. I believe this is because the original set is from this.props.challenges.vexNotes, and the new set is from this.props.vexNotes
// the noteHit function dispatches setVexNotes, which updates the store's vexNote property. If there were a way to write an action that just modifies one property on a store property(in this case, challenges.vexNotes), I wouldn't have to do all of this
// other option is to make vexNotes its own db model
      if (postMount === true){
        beams = Vex.Flow.Beam.generateBeams(this.props.challenges.vexNotes);

        Vex.Flow.Formatter.FormatAndDraw(context, stave, this.props.challenges.vexNotes)

        beams.forEach(function(b) {b.setContext(context).draw()})
        console.log("FORMATTED")
      }

// startSequence is still being passed the local state.vexNotes
        return (
        <div>

        {scoreCounter}

        <div id="staff"></div>

        <button type="button" name="button" id="startButton" onClick={() => startSequence(noteSequence, bpm, this.props.challenges.vexNotes)}>START</button>

        <button type="button" name="button" id="stopButton" onClick={stopSequence}>STOP</button>
        </div>
        )
    }
}
