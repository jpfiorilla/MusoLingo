// for notes, enter eighth, triplet and sixteenth notes as strings with extra spaces
const challenges = [
  {
    "bpm": 80,
    "notes": ["C3", "D3", "D3", "C3 C3"],
    "vexNotes": [
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['c/4'], duration: '8'},
      {clef: 'treble', keys: ['c/4'], duration: '8'}
    ]
  },
  {
    "bpm": 60,
    "notes": ["A4 G4", "A4 G4", "A4 G4", "A4", "A4 G4", "A4 G4", "A4 G4", "A4", "B4"],
    "vexNotes": [
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'}
    ]
  }
]

module.exports = challenges;
