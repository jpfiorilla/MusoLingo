// VF = Vex.Flow;

const noteLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const notesAccidentals = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'Ab', 'Bb', 'C#', 'D#', 'Eb', 'F#', 'G#'];
const octaves = ['0', '1', '2', '3', '4', '5', '6'];

export const randomTrebleNoteName = function(floor){
    let letter = notesAccidentals[Math.floor(Math.random() * notesAccidentals.length)];
    let octave = ['4', '5'][Math.floor(Math.random() * 2)];
    return '' + letter + '/' + octave;
}

export const randomOtherTrebleNoteNames = function(note){
    let arr = [];
    while (arr.length < 3){
        let newNote = randomTrebleNoteName();
        if (newNote !== note && arr.indexOf(newNote) === -1) arr.push(getNoteName(newNote));
    }
    return arr;
}

export const getNoteName = function(note){
    return note.substring(0, note.indexOf('/'))
}

// const randomBassNote = function(){
//     let letter = noteLetters[Math.floor(Math.random() * noteLetters.length)];
//     let octave = ['4', '5'][Math.floor(Math.random() * 2)];
//     return '' + letter + '/' + octave;
// }

// console.log(randomTrebleNote());