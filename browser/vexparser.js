// helper functions for game; help parse and render vex flow notes when there is more than one measure
import Vex from 'vexflow';

export const durationParser = function(note){
  switch (note.duration){
    case '1': return 4;
    case 'w': return 4;
    case '2': return 2;
    case 'h': return 2;
    case '4': return 1;
    case 'q': return 1;
    case 'qr': return 1;
    case '8': return 0.5;
    case '16': return 0.25;
    default: console.log("Unknown vexNote duration")
  }
}

// takes an array of all the notes, and separates them into subarrays of notes, each of which will constitute one measure
export const separateMeasures = function(staffNotes){
  var arrayOfMeasures = [], noteCount = 0, index = 0;
  while (index < staffNotes.length){
    var singleMeasure = [];
    while (noteCount < 4){
      noteCount += (staffNotes[index].dot ? durationParser(staffNotes[index]) * 1.5 : durationParser(staffNotes[index]));
      // makes sure that the most recent note did not exceed the limit for the measure
      if (noteCount <= 4){
        if (staffNotes[index].accidental !== undefined){
          singleMeasure.push(new Vex.Flow.StaveNote(staffNotes[index]).addAccidental(0, new Vex.Flow.Accidental(`${staffNotes[index].accidental}`)));
        } else if (staffNotes[index].dot === true){
          singleMeasure.push(new Vex.Flow.StaveNote(staffNotes[index]).addDotToAll())
        } else {
          singleMeasure.push(new Vex.Flow.StaveNote(staffNotes[index]));
        }
        // what to do with excess notes
      } else {
      }
      index++;
    }
    arrayOfMeasures.push(singleMeasure)
    noteCount = 0;
  }
    return arrayOfMeasures;
}

export const separateMeasuresDuringGame = function(staffNotes){
  var arrayOfMeasures = [], noteCount = 0, index = 0;
  while (index < staffNotes.length){
    var singleMeasure = [];
    while (noteCount < 4){
      noteCount += (staffNotes[index].dots > 0 ? durationParser(staffNotes[index]) * 1.5 : durationParser(staffNotes[index]));
      // makes sure that the most recent note did not exceed the limit for the measure
      if (noteCount <= 4){
        if (staffNotes[index].accidental !== undefined){
          singleMeasure.push(staffNotes[index].addAccidental(0, new Vex.Flow.Accidental(`${staffNotes[index].accidental}`)))
        } else if (staffNotes[index].dot === true){
          singleMeasure.push(staffNotes[index].addDotToAll())
        } else {
          singleMeasure.push(staffNotes[index]);
        }
      } else {
      }
      index++;
    }
    arrayOfMeasures.push(singleMeasure)
    noteCount = 0;
  }
  return arrayOfMeasures;
}

// looks at the number of measures and creates a corresponding number of staves
export const staveCreator = function(arrayOfMeasures){
  // console.log("INSIDE STAVE CREATOR", arrayOfMeasures)
  let staveArray = [];
  arrayOfMeasures.forEach((measure, index) => {
    if (index === 0){
      // VF.Stave arguments: canvas x position, y position, width in pixels
      staveArray.push(new Vex.Flow.Stave(10, 0, 350).addClef("treble").addTimeSignature("4/4"))
    } else {
      staveArray.push(new Vex.Flow.Stave(staveArray[index-1].width + staveArray[index-1].x, 0, 300))
    }
  })
  return staveArray;
}

export const beamCreator = function (noteMeasures){
  var beamArray = [];
  noteMeasures.forEach(measure => {
    beamArray.push(Vex.Flow.Beam.generateBeams(measure))
    // beamArray.push(new Vex.Flow.Beam(measure))
  });
  return beamArray;
}

export const musicRender = function (staveMeasures, noteMeasures, beamArray, context){
  staveMeasures.forEach((staff, index) => {
    staff.setContext(context).draw();
    Vex.Flow.Formatter.FormatAndDraw(context, staff, noteMeasures[index])
  })

  beamArray.forEach(array => {
    array.forEach(b => {
      b.setContext(context).draw()
    })
  })
}
