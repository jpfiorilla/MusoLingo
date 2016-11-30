// for notes, enter eighth, triplet and sixteenth notes as strings with extra spaces
const challenges = [
  {
    "title": "First Example",
    "bpm": 80,
    "notes": ["C3", "D3", "E3", "F3 G3"],
    "vexNotes": [
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'}
    ]
  },
  {
    "title": "Second Example",
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
      {clef: 'treble', keys: ['a/4'], duration: 'q'}
    ]
  },
  {
    "title": "Hot Cross Buns",
    "bpm": 80,
    "notes": ["C3", "D3"],
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
      {clef: 'treble', keys: ['c/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'}
    ]
  },
  {
    "title": "Jurassic Park Theme",
    "bpm": 80,
    "notes": ["Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "rest", "F4", "Bb3", "G4", "rest", "G4"],
    "vexNotes": [
      {clef: 'treble', keys: ['bb/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '2'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/3'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'}
    ]
  },
  {
    "title": "Old McDonald",
    "bpm": 80,
    "notes": ["Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4"],
    "vexNotes": [
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['e/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'}
    ]
  },
]


      // {clef: 'treble', keys: ['b/4'], duration: '8'},

      // {clef: 'treble', keys: ['a/4'], duration: '8'},
      // {clef: 'treble', keys: ['b/4'], duration: '2'},
      // {clef: 'treble', keys: ['f/4'], duration: 'q'},
      // {clef: 'treble', keys: ['b/3'], duration: 'q'},
      // {clef: 'treble', keys: ['g/4'], duration: '2'}

module.exports = challenges;
