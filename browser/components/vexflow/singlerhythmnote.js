import React, {Component} from 'react';
import { getNoteName, randomTrebleNoteName } from '../../utils';

import Vex from 'vexflow';

CanvasRenderingContext2D.prototype.clear =
  CanvasRenderingContext2D.prototype.clear || function (preserveTransform) {
    if (preserveTransform) {
      this.save();
      this.setTransform(1, 0, 0, 1, 0, 0);
    }

    this.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (preserveTransform) {
      this.restore();
    }
};

export default class SingleRhythmNote extends Component {
    render(){
        let {staffId} = this.props;
        console.log('render', staffId)
        return (
        <div>
            {/*<div id="staff1"></div>*/}
            <canvas id={staffId} width="50" height="150"></canvas>
        </div>
        )
    }
    componentDidMount(){
        const {info, staffId} = this.props;
        console.log('mounting with', staffId)

        let VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        // var div = document.getElementById("staff1");
        // var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        var renderer = new Vex.Flow.Renderer(document.getElementById(staffId), Vex.Flow.Renderer.Backends.CANVAS);

        // Configure the rendering context.
        // renderer.resize(50, 50);
        var context = renderer.getContext();
        context.clear();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 400);

        var notes = [];
        info.forEach(noteDur => notes.push(new VF.StaveNote({ keys: ["a/4"], duration: noteDur })))

        var beams = VF.Beam.generateBeams(notes);
        Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function(b) {b.setContext(context).draw()})
    }
    componentDidUpdate(){
        const {info, staffId} = this.props;
        console.log('receiving props', staffId)

        let VF = Vex.Flow;

        // Create an SVG renderer and attach it to the DIV element named "boo".
        // var div = document.getElementById("staff1");
        // var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
        var renderer = new Vex.Flow.Renderer(document.getElementById(staffId), Vex.Flow.Renderer.Backends.CANVAS);

        // Configure the rendering context.
        // renderer.resize(50, 50);
        var context = renderer.getContext();
        // context.clearRect(0, 0, renderer.width, renderer.height);
        context.clear();
        context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

        // Create a stave of width 400 at position 10, 40 on the canvas.
        var stave = new VF.Stave(10, 40, 400);

        var notes = [];
        info.forEach(noteDur => notes.push(new VF.StaveNote({ keys: ["a/4"], duration: noteDur })))

        var beams = VF.Beam.generateBeams(notes);
        Vex.Flow.Formatter.FormatAndDraw(context, stave, notes);
        beams.forEach(function(b) {b.setContext(context).draw()})
    }

}
