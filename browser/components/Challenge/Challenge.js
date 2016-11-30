import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';
import StopIcon from 'material-ui/svg-icons/av/stop';
import { startSequence, stopSequence } from '../../piano_hero';
import { separateMeasures, separateMeasuresDuringGame, staveCreator, beamCreator, musicRender } from '../../vexparser';
import { setScore } from '../../redux/ChallengeActions'
import store from '../../store';
import tonal from 'tonal';
import Vex from 'vexflow';

var vexNotes, beams, stave, context, postMount, renderer, staveMeasures;

export default class Challenge extends Component {
    constructor() {
      super()

      this.scorePercentage = this.scorePercentage.bind(this);
    }

    scorePercentage(notes){
      var totalNotes = 0;
      for (let i = 0; i < notes.length; i++){
        if (notes[i] !== 'rest') {
          totalNotes += notes[i].split(" ").length;
        }
      }
      return `${Math.round(this.props.score/totalNotes * 100)}%`;
    }

    componentDidMount(){
    }

    componentDidUpdate(){
      if (this.props.challenges.vexNotes && postMount !== true){
        var VF = Vex.Flow;
        var div = document.getElementById("staff")

        renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        renderer.resize(1350, 200);

        context = renderer.getContext();
        context.setFont("Arial", 10, "");

        var staffNotes = [];
        this.props.challenges.vexNotes.forEach(vexNote =>{
          staffNotes.push(vexNote)
        })

        let noteMeasures = separateMeasures(this.props.challenges.vexNotes);
        staveMeasures = staveCreator(noteMeasures);
        var beamArray = beamCreator(noteMeasures)

        // console.log("STAFFNOTES", staffNotes)
        // console.log("NOTES", noteMeasures)
        // console.log("STAVES", staveMeasures)

        // noteMeasures[0].forEach(note => {
        //   note.setStyle({strokeStyle: "green", fillStyle: "green"})
        // })

        musicRender(staveMeasures, noteMeasures, beamArray, context)

        postMount = true;

        let updatedVexNotes = [].concat.apply([], noteMeasures);
        // store.dispatch(setNotes(updatedVexNotes))
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
          <div><h2>{this.props.score} correct {this.scorePercentage(this.props.challenges.notes)}</h2></div>
        )
      }

// this next chunk of code is currently drawing a new set of notes over the original set. idk why - try clearing original notes first?
// how to incorporate separating measures?
      if (postMount === true){
        // THIS VERSION of separateMeasures should handle actual new VF.StaveNotes rather than the just objects with the properties we want
        let noteMeasures = separateMeasuresDuringGame(this.props.challenges.vexNotes);
        // staveMeasures = staveCreator(noteMeasures);
        var beamArray = beamCreator(noteMeasures)

        // console.log("NOTES", noteMeasures)
        // console.log("STAVES", staveMeasures)

        musicRender(staveMeasures, noteMeasures, beamArray, context)
        // console.log("FORMATTED")
      }

// change start button to reset after one loop; maybe have it toggle once the scoreCounter is visible?
        return (
        <div>

        <b>{this.props.challenges.title}</b> <br />
        <i>bpm= </i><b>{this.props.challenges.bpm}</b>

        <div id="staff"></div>

        {scoreCounter}

        <RaisedButton icon={<PlayIcon />} backgroundColor="#5D99FF" onClick={() => startSequence(noteSequence, bpm, this.props.challenges.vexNotes)} />
        <RaisedButton icon={<StopIcon />} backgroundColor="#FF6954" onClick={stopSequence} />

        {/* <button type="button" name="button" id="startButton" onClick={() => startSequence(noteSequence, bpm, this.props.challenges.vexNotes)}>START</button>

        <button type="button" name="button" id="stopButton" onClick={stopSequence}>STOP</button> */}
        </div>
        )
    }
}
