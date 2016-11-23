import tonal from 'tonal';

const noteLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesAccidentals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'C#', 'D#', 'Eb', 'F#', 'G#'];
const octaves = ['0', '1', '2', '3', '4', '5', '6'];

const intervals = ['second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
const intervalQualities = ['Augmented', 'Major', 'Perfect', 'minor', 'diminished'];
const intervalsPerfect = ['Augmented', 'Perfect', 'diminished'];
const intervalsMajor = ['Augmented', 'Major', 'minor', 'diminished'];

const triadQualities = ['+', '', 'm', 'dim', 'sus4'];

const basicDurations = ['whole', 'half', 'quarter', '8th', '16th'];

export const randomNoteName = function(floor = 0, ceiling = 87){
    let newNoteMidi = Math.floor(Math.random() * (ceiling-floor) + floor + 1);
    return midiToVex(newNoteMidi);
}

export const randomOtherNoteNames = function (note, floor, ceiling) {
    // calculates three other "wrong" notes
    if (!floor) floor = vexToMidi(note);
    if (!ceiling) ceiling = floor + 11;
    let arr = [];
    while (arr.length < 3){
        let newNote = getNoteName(randomNoteName(floor, ceiling));
        if (newNote !== getNoteName(note) && arr.indexOf(newNote) === -1) arr.push(getNoteName(newNote));
    }
    return arr;
}

export const calculateInterval = function(notes){
    let quality, num;
    let interval = tonal.interval(vexToTonal(notes[0]), vexToTonal(notes[1]));
    interval[1] === 'P' ? quality = 'Perfect' :
    interval[1] === 'A' ? quality = 'Augmented' :
    interval[1] === 'm' ? quality = 'minor' :
    interval[1] === 'M' ? quality = 'Major' :
    interval[1] === 'd' ? quality = 'diminished' : quality = '';
    interval[0] === '1' ? num = 'unison' :
    interval[0] === '2' ? num = 'second' :
    interval[0] === '3' ? num = 'third' :
    interval[0] === '4' ? num = 'fourth' :
    interval[0] === '5' ? num = 'fifth' :
    interval[0] === '6' ? num = 'sixth' :
    interval[0] === '7' ? num = 'seventh' :
    interval[0] === '8' ? num = 'octave' : num = '';
    return quality + ' ' + num;
}

export const randomIntervalName = function(){
    let qual, num = intervals[Math.floor(Math.random() * intervals.length)];
    (num === 'unison' || num === 'fourth' || num === 'fifth' || num === 'octave') ?
    qual = intervalsPerfect[Math.floor(Math.random() * intervalsPerfect.length)] :
    qual = intervalsMajor[Math.floor(Math.random() * intervalsMajor.length)];
    return qual + ' ' + num;
}

export const randomIntervals = function(correct){
    let arr = [];
    while (arr.length < 3){
        let newInterval = randomIntervalName();
        if (newInterval !== correct && arr.indexOf(newInterval) === -1) arr.push(newInterval);
    }
    return arr;
}

export const randomTriad = function(floor, ceiling){
    let triadQuality = triadQualities[Math.floor(Math.random() * triadQualities.length)];
    let triadRoot = vexToTonal(randomNoteName(floor, ceiling));
    let tonalTriad = tonal.chord.build(triadQuality, triadRoot);
    let triad = [];
    tonalTriad.forEach(note => triad.push(tonalToVex(note)));
    return [triad, [getNoteName(triadRoot), triadQuality].join('')];
}

export const randomOtherTriads = function(rightTriadName){
    let arr = [];
    while (arr.length < 3){
        let triadQuality = triadQualities[Math.floor(Math.random() * triadQualities.length)];
        let newTriad = [getNoteName(rightTriadName), triadQuality].join('');
        if (newTriad !== rightTriadName && arr.indexOf(newTriad) === -1) arr.push(newTriad);
    }
    return arr;
}

export const randomNoteDuration = function(){
    let duration = basicDurations[Math.floor(Math.random() * basicDurations.length)];
    return duration;
}

export const randomOtherNoteDurations = function(correct){
    let arr = [];
    while (arr.length < 3){
        let newDuration = randomNoteDuration();
        if (newDuration !== correct && arr.indexOf(newDuration) === -1) arr.push(newDuration);
    }
    return arr;
}

export const getNoteName = function(note){
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