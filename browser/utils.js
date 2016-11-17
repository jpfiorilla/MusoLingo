// VF = Vex.Flow;

const noteLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const octaves = ['0', '1', '2', '3', '4', '5', '6'];

export const randomTrebleNote = function(){
    let letter = noteLetters[Math.floor(Math.random() * noteLetters.length)];
    let octave = ['4', '5'][Math.floor(Math.random() * 2)];
    return '' + letter + '/' + octave;
}

export const randomOtherTrebleNote = function(note){
    let letter = noteLetters[Math.floor(Math.random() * noteLetters.length)];
    let octave = ['4', '5'][Math.floor(Math.random() * 2)];
    let final = '' + letter + '/' + octave;
    if (final === note) return randomOtherTrebleNotes(note);
    return final;
}

// const randomBassNote = function(){
//     let letter = noteLetters[Math.floor(Math.random() * noteLetters.length)];
//     let octave = ['4', '5'][Math.floor(Math.random() * 2)];
//     return '' + letter + '/' + octave;
// }

// console.log(randomTrebleNote());