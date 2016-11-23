import React, {Component} from 'react';
import { getNoteName, randomTrebleNoteName } from '../../utils';

import tonal from 'tonal';
import Vex from 'vexflow';

export default class RandomChord extends Component {
    render(){
        return (
        <div>
            <div id="staff"></div>
        </div>
        )
    }
    componentDidMount(){
        const {chord} = this.props;

        var VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        var div = document.getElementById("staff")
        var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

        // Configure the rendering context.
        renderer.resize(500, 200);
        var context = renderer.getContext();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        var stave = new VF.Stave(10, 40, 400);

        // Add a clef and time signature.
        stave.addClef("treble").addTimeSignature("4/4");

        stave.setContext(context).draw();
 
        let outChord = new VF.StaveNote({keys: chord, duration: "w" })

        chord.forEach((note, idx) => {
            if (note[1] !== '/'){
                outChord.addAccidental(idx, new VF.Accidental(note[1]));
            }
        })

        let notes = [outChord];

        VF.Formatter.FormatAndDraw(context, stave, notes);
    }
}