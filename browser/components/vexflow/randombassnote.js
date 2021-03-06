import React, {Component} from 'react';
import { getNoteName, randomTrebleNoteName } from '../../utils';

import Vex from 'vexflow';

export default class RandomBassNote extends Component {
    render(){
        return (
        <div>
            <div id="staff"></div>
        </div>
        )
    }
    componentDidMount(){
        const {note} = this.props;

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
        stave.addClef("bass");

        // Connect it to the rendering context and draw!
        stave.setContext(context).draw();


        if (getNoteName(note)[1]) {
            var notes = [
                new VF.StaveNote({clef: "bass", keys: [note + "/3"], duration: "w" }).addAccidental(0, new VF.Accidental(getNoteName(note)[1]))
            ];
            }
        else {
            notes = [
                new VF.StaveNote({clef: "bass", keys: [note + "/3"], duration: "w" })
            ];
        }
        

        // Create a voice in 4/4 and add above notes
        var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
        voice.addTickables(notes);

        // Format and justify the notes to 400 pixels.
        var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

        // Render voice
        voice.draw(context, stave);
    }
    
}