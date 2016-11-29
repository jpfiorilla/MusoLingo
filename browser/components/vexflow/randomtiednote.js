import React, {Component} from 'react';
import { getNoteName, randomTrebleNoteName, getDuration } from '../../utils';

import Vex from 'vexflow';

export default class RandomTiedNote extends Component {
    render(){
        return (
        <div>
            <div id="staff"></div>
        </div>
        )
    }
    componentDidMount(){
        const {duration} = this.props;

        let VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("staff")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 200);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 400);

        let alteration = duration.split(" ")[0].toString();
        let noteType = duration.split(" ")[1].toString();

        let vexDur, halfDur;
        if (noteType === 'half'){
            vexDur = 'h';
            halfDur = 'q';
        } else if (noteType === 'quarter'){
            vexDur = 'q';
            halfDur = '8';
        } else if (noteType === 'eighth'){
            vexDur = '8';
            halfDur = '16';
        } else {
            console.error('Invalid note length');
        }

        let keys;
        Math.floor(Math.random() * 2) ?
        keys = ['c/5'] :
        keys = ['a/4'];

        let vexNotes;
        if (alteration === 'Dotted'){
            vexNotes = [
                new VF.StaveNote({clef: "treble", keys, duration: vexDur + "d" }).addDotToAll()
            ]
        } else if (alteration === 'Tied'){
            vexNotes = [
                new VF.StaveNote({clef: 'treble', keys, duration: vexDur}),
                new VF.StaveNote({clef: 'treble', keys, duration: halfDur})
            ]
        // } else if (alteration === 'Triplet'){

        } else {
            console.error('Invalid note alteration');
        }

        // let notes = [new VF.StaveNote({clef: 'treble', keys, duration: noteDur})];

        var beams = VF.Beam.generateBeams(notes);
        Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function(b) {b.setContext(context).draw()})

        if (alteration === 'Tied'){
            var ties = [
                new VF.StaveTie({
                    first_note: notes[0],
                    last_note: notes[1],
                    first_indices: [0],
                    last_indices: [0]
                })
            ];
            ties.forEach(function(t) {t.setContext(context).draw()})
        }
    }
    componentDidUpdate(){
        const {rhythmnote} = this.props;

        let VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("staff")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 200);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 400);

        // Add a clef and time signature.
        // stave.addClef("treble").addTimeSignature("4/4");
        // stave.addClef("treble");

        // Connect it to the rendering context and draw!
        // stave.setContext(context).draw();

        let noteDur;
        if (rhythmnote === '16th') noteDur = rhythmnote.substring(0, 2);
        else noteDur = rhythmnote[0];

        let keys;
        Math.floor(Math.random() * 2) ?
        keys = ['c/5'] :
        keys = ['a/4'];

        let notes = [new VF.StaveNote({clef: 'treble', keys, duration: noteDur})];

        var beams = VF.Beam.generateBeams(notes);
        Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function(b) {b.setContext(context).draw()})

        // Create a voice in 4/4 and add above notes
        // var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        // voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        // var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

        // Render voice
        // voice.draw(context, stave);
    }
}