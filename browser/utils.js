import tonal from 'tonal';

const noteLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesAccidentals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'C#', 'D#', 'Eb', 'F#', 'G#'];
const octaves = ['0', '1', '2', '3', '4', '5', '6'];

export const randomTrebleNoteName = function(floor = 0, ceiling = 87){
    /*
    if (!floor && !ceiling){
        let letter = notesAccidentals[Math.floor(Math.random() * notesAccidentals.length)];
        let octave = ['4', '5'][Math.floor(Math.random() * 2)];
        let newNote = '' + letter + '/' + octave;
        return newNote;
    } else {
        let newNoteMidi = vexToMidi(floor) + Math.floor(Math.random() * 11) + 1;
        let newNote = midiToVex(newNoteMidi);
        return newNote;
    }
    */
    let newNoteMidi = Math.floor(Math.random() * (ceiling-floor) + floor);
    return midiToVex(newNoteMidi);
}

export const randomOtherTrebleNoteNames = function(note, floor, ceiling){
    if (!floor) floor = vexToMidi(note);
    if (!ceiling) ceiling = floor + 11;
    let arr = [];
    while (arr.length < 3){
        let newNote = getNoteName(randomTrebleNoteName(floor, ceiling));
        if (newNote !== getNoteName(note) && arr.indexOf(newNote) === -1) arr.push(getNoteName(newNote));
    }
    return arr;
}

export const getNoteName = function(note){
    // if (note.indexOf('/') !== -1) return note.substring(0, note.indexOf('/'));
    // console.log('notename', note);
    if (note[1] === 'b' || note[1] === '#') return note.substring(0, 2);
    else return note[0];
}

export const enharmonize = function(note){
    return 
    note === 'Gb' ? 'F#' :
    note === 'G#' ? 'Ab' :
    note === 'A#' ? 'Bb' :
    note === 'B#' ? 'C' :
    note === 'E#' ? 'F' :
    note;
}

export const isHigher = function(a, b){
    return (tonal.midi.toMidi(vexToTonal(a)) > tonal.midi.toMidi(vexToTonal(b)));
}

export const vexToTonal = function(vexflowName){
    let slash = vexflowName.indexOf('/');
    return vexflowName.slice(0, slash) + vexflowName.slice(slash+1);
}

export const vexToMidi = function(vexFlowName){
    return tonal.midi.toMidi(vexToTonal(vexFlowName));
}

export const midiToVex = function(mid){
    let tonalNote = tonal.note.fromMidi(mid);
    // console.log(tonalNote)
    return tonalToVex(tonalNote);
}

export const tonalToVex = function(tonalName){
    // console.log('tonaltovex', tonalName);
    return '' + getNoteName(tonalName) + '/' + tonalName[tonalName.length-1];
}

// const randomBassNote = function(){
//     let letter = noteLetters[Math.floor(Math.random() * noteLetters.length)];
//     let octave = ['4', '5'][Math.floor(Math.random() * 2)];
//     return '' + letter + '/' + octave;
// }

// console.log(randomTrebleNote());