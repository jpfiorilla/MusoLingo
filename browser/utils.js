import tonal from 'tonal';

const noteLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
const notesAccidentals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'C#', 'D#', 'Eb', 'F#', 'G#'];
const octaves = ['0', '1', '2', '3', '4', '5', '6'];

const intervals = ['second', 'third', 'fourth', 'fifth', 'sixth', 'seventh'];
const intervalQualities = ['Augmented', 'Major', 'Perfect', 'Minor', 'diminished'];
const intervalsPerfect = ['Augmented', 'Perfect', 'Diminished'];
const intervalsMajor = ['Augmented', 'Major', 'Minor', 'Diminished'];
const stepQualities = ['Augmented', 'Whole', 'Half', 'Whole', 'Half', 'Whole', 'Half', 'Whole', 'Half', 'Whole', 'Half', 'Whole', 'Half'];

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

export const randomWhiteKeyName = function(floor = 0, ceiling = 87){
    let newNoteMidi = Math.floor(Math.random() * (ceiling-floor) + floor + 1);
    let noteName = midiToVex(newNoteMidi);
    if (noteName[1] === 'b' || noteName[1] === '#'){
        return randomWhiteKeyName(floor, ceiling);
    } else {
        return noteName;
    }
}

export const randomOtherWhiteKeys = function (note, floor, ceiling) {
    // calculates three other "wrong" notes
    if (!floor) floor = vexToMidi(note);
    if (!ceiling) ceiling = floor + 11;
    let arr = [];
    while (arr.length < 3){
        let newNote = getNoteName(randomWhiteKeyName(floor, ceiling));
        if (newNote !== getNoteName(note) && arr.indexOf(newNote) === -1) arr.push(getNoteName(newNote));
    }
    return arr;
}

export const calculateInterval = function(notes){
    let quality, num;
    let interval = tonal.interval(vexToTonal(notes[0]), vexToTonal(notes[1]));
    interval[1] === 'P' ? quality = 'Perfect' :
    interval[1] === 'A' ? quality = 'Augmented' :
    interval[1] === 'm' ? quality = 'Minor' :
    interval[1] === 'M' ? quality = 'Major' :
    interval[1] === 'd' ? quality = 'Diminished' : quality = '';
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

export const randomStepName = function(){
    let qual = stepQualities[Math.floor(Math.random() * stepQualities.length)];
    let num = 'step';
    return qual + ' ' + num;
}

export const intervalToStep = function(interval){
    return interval === 'Major second' ? 'Whole step' :
    interval === 'Diminished third' ? 'Whole step' :
    interval === 'Minor second' ? 'Half step' :
    interval === 'Augmented unison' ? 'Half step' :
    interval === 'Augmented second' ? 'Augmented step' :
    'n/a';
}

export const randomStepsNames = function(correct){
    let arr = [];
    while (arr.length < 2){
        let newInterval = randomStepName();
        if (newInterval !== correct && arr.indexOf(newInterval) === -1) arr.push(newInterval);
    }
    arr.push("I don't know");
    return arr;
}

export const randomDistance = function(){
    return intervals[Math.floor(Math.random() * intervals.length)];
}

export const randomOtherDistances = function(correct){
    let arr = [];
    while (arr.length < 3){
        let newInterval = randomDistance();
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

const shorterDurations = ['half', 'quarter', 'eighth'];
export const randomShorterNoteDuration = function(){
    let duration = shorterDurations[Math.floor(Math.random() * shorterDurations.length)];
    return duration;
}

export const randomTieDuration = function(){
    let duration = shorterDurations[Math.floor(Math.random() * shorterDurations.length)];
    let chooser = Math.floor(Math.random() * 2);
    let exp;
    if (chooser === 0){
        exp = 'Dotted ' + duration + ' note';
        // console.log('tie duration', exp);
        return exp;
    } else if (chooser === 1){
        exp = 'Tied ' + duration + ' note';
        // console.log('tie duration', exp);
        return exp;
    // } else if (chooser === 2){
    //     return 'Triplet ' + duration + 'note';
    }
}

export const getDuration = function(note){
    let alteration = note.split(" ")[0].toString();
    let notetype = note.split(" ")[1].toString();
    let base = 0, newDuration = 0;
    notetype === 'half' ? base = 2 :
    notetype === 'quarter' ? base = 1 :
    base = 0.5;
    alteration === 'Dotted' ? newDuration = base * 1.5 :
    alteration === 'Tied' ? newDuration = base * 1.5 :
    newDuration = base * 2 / 3;
    let exp = newDuration.toString().substring(0, 3) + ' beats';
    console.log('getDur of correct: ', exp);
    return exp;
}

export const getOtherDurations = function(correct){
    let arr = [];
    while (arr.length < 3){
        let newDuration = randomTieDuration();
        if (newDuration !== correct && arr.indexOf(newDuration) === -1) arr.push(newDuration);
    }
    return arr;
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

export const octaveDown = function(note){
    let newOctave = Number(note[note.length-1]) - 1;
    let newNote = note.substring(0, note.length-1) + newOctave.toString();
    return newNote;
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