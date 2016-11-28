import React, {Component} from 'react';
import { getNoteName, randomTrebleNoteName } from '../../utils';

import Vex from 'vexflow';

export default class RandomTrebleInterval extends Component {
    render(){
        return (
        <div>
            <div id="staff"></div>
        </div>
        )
    }
    componentDidMount(){
        const {intervalNotes} = this.props;

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
        stave.addClef("treble");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        console.log('INTERVAL NOTES!!', intervalNotes)


        var lownote = new VF.StaveNote({clef: "treble", keys: [intervalNotes[0]], duration: "h" });
        if (intervalNotes[0][1] !== '/') lownote.addAccidental(0, new VF.Accidental(intervalNotes[0][1]));
        var highnote = new VF.StaveNote({clef: "treble", keys: [intervalNotes[1]], duration: "h" });
        if (intervalNotes[1][1] !== '/') highnote.addAccidental(0, new VF.Accidental(intervalNotes[1][1]));

        var notes = [lownote, highnote];
        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

        // Render voice
        voice.draw(context, stave);
    }
    componentDidUpdate(){
        const {intervalNotes} = this.props;

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
        stave.addClef("treble");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();

        console.log('INTERVAL NOTES!!', intervalNotes)


        var lownote = new VF.StaveNote({clef: "treble", keys: [intervalNotes[0]], duration: "h" });
        if (intervalNotes[0][1] !== '/') lownote.addAccidental(0, new VF.Accidental(intervalNotes[0][1]));
        var highnote = new VF.StaveNote({clef: "treble", keys: [intervalNotes[1]], duration: "h" });
        if (intervalNotes[1][1] !== '/') highnote.addAccidental(0, new VF.Accidental(intervalNotes[1][1]));

        var notes = [lownote, highnote];
        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

        // Render voice
        voice.draw(context, stave);
    }
}
