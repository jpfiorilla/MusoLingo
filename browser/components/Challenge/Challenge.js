import React, {Component} from 'react';
import { startSequence, stopSequence } from '../../piano_hero';
import { separateMeasures, separateMeasuresDuringGame, staveCreator, beamCreator, musicRender } from '../../vexparser';
import tonal from 'tonal';
import Vex from 'vexflow';

var vexNotes, beams, stave, context, postMount, renderer, staveMeasures;

export default class Challenge extends Component {
    constructor(props){
      super(props)
      this.state = {
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

    componentDidMount(){
      // console.log("COMP DIDMOUNT RUNNING", this.props)
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
      if (this.props.challenges.vexNotes && postMount !== true){
        var VF = Vex.Flow;
        var div = document.getElementById("staff")

        renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(1150, 200);

        context = renderer.getContext();
        context.setFont("Arial", 10, "");

        var staffNotes = [];
        this.props.challenges.vexNotes.forEach(vexNote =>{
          staffNotes.push(vexNote)
        })

        let noteMeasures = separateMeasures(this.props.challenges.vexNotes);
        staveMeasures = staveCreator(noteMeasures);
        var beamArray = beamCreator(noteMeasures)

        console.log("STAFFNOTES", staffNotes)
        console.log("NOTES", noteMeasures)
        console.log("STAVES", staveMeasures)

        // noteMeasures[0].forEach(note => {
        //   note.setStyle({strokeStyle: "green", fillStyle: "green"})
        // })

        musicRender(staveMeasures, noteMeasures, beamArray, context)

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

// this next chunk of code is currently drawing a new set of notes over the original set. idk why - try clearing original notes first?
// how to incorporate separating measures?
      if (postMount === true){
        // THIS VERSION of separateMeasures should handle actual new VF.StaveNotes rather than the just objects with the properties we want
        let noteMeasures = separateMeasuresDuringGame(this.props.challenges.vexNotes);
        // staveMeasures = staveCreator(noteMeasures);
        var beamArray = beamCreator(noteMeasures)

        console.log("NOTES", noteMeasures)
        console.log("STAVES", staveMeasures)

        musicRender(staveMeasures, noteMeasures, beamArray, context)
        console.log("FORMATTED")
      }

// change start button to reset after one loop; maybe have it toggle once the scoreCounter is visible?
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
