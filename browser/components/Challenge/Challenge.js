import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/SvgIcon';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-outline';
import StopIcon from 'material-ui/svg-icons/av/stop';
import { startSequence, stopSequence } from '../../piano_hero';
import { separateMeasures, separateMeasuresDuringGame, staveCreator, beamCreator, notePainter, musicRender } from '../../vexparser';
import { setScore } from '../../redux/ChallengeActions'
import MetronomeCounter from './MetronomeCounterContainer'
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
      let route = window.location.pathname;
      var lessonId = route[route.length - 1];
      var totalNotes = 0;
      for (let i = 0; i < notes.length; i++){
        for (let x = 0; x < notes[i].length; x++){
          if (notes[i][x] !== 'space' && notes[i][x] !== 'rest') {
            totalNotes++
          }
        }
      }

      let {score} = this.props;
      let finalScore = score/totalNotes;
      let passed = (score / totalNotes >= 0.5) ? true : false;
      this.props.user.completed.challenges[lessonId] = finalScore;
      if (passed) {
        if (finalScore < .75) {
          this.props.user.completed.keys += 1;
        }
        else if (finalScore <= .99) {
          this.props.user.completed.keys += 2;
        }
        else {
          this.props.user.completed.keys += 3;
        }

        this.props.updateUser(this.props.user.completed, 'completed', this.props.user.id);
      return `${Math.round(this.props.score/totalNotes * 100)}%`;
    }
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
        // SCORE COUNTER:
        scoreCounter = (
          <div><h2>{this.props.score} correct {this.scorePercentage(noteSequence)}</h2></div>
        )
      }

// this next chunk of code is currently drawing a new set of notes over the original set. idk why - try clearing original notes first?
// how to incorporate separating measures?
      if (postMount === true){
        // THIS VERSION of separateMeasures should handle actual new VF.StaveNotes rather than the just objects with the properties we want
        // takes the updated props, which correspond to visualNotes in piano_hero.js
        let noteMeasures = separateMeasuresDuringGame(this.props.challenges.vexNotes);
        // staveMeasures = staveCreator(noteMeasures);
        var beamArray = beamCreator(noteMeasures)
        // must be called AFTER beams are created, otherwise solid noteheads won't change color
        notePainter(noteMeasures)

        // console.log("NOTES", noteMeasures)
        // console.log("STAVES", staveMeasures)

        musicRender(staveMeasures, noteMeasures, beamArray, context)
        // console.log("FORMATTED")
      }

// change start button to reset after one loop; maybe have it toggle once the scoreCounter is visible?
        return (
        <div id="challenge-container">

        <b id="theme-title">{this.props.challenges.title}</b> <br />
        <i>bpm= </i><b>{this.props.challenges.bpm}</b>

        <div id="staff"></div>

        {scoreCounter}

        <RaisedButton icon={<PlayIcon />} backgroundColor="#5D99FF" onClick={() => startSequence(noteSequence, bpm, this.props.challenges.vexNotes)} />
        <RaisedButton icon={<StopIcon />} backgroundColor="#FF6954" onClick={stopSequence} />

        <MetronomeCounter />

        </div>
        )
    }
}
