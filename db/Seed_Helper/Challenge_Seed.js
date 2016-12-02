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
    "notes": ["B3", "A3", "G3", "space", "B3", "A3", "G3", "space", "G3 G3", "G3 G3", "A3 A3", "A3 A3", "B3", "A3", "G3", "space"],
    "vexNotes": [
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: 'q'},
      {clef: 'treble', keys: ['a/4'], duration: 'q'},
      {clef: 'treble', keys: ['g/4'], duration: '2'}
    ]
  },
  {
    "title": "Jurassic Park Theme",
    "bpm": 108,
    "notes": ["Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "F4", "Eb4", "Bb4 A4", "Bb4", "space", "F4", "Bb3", "G4", "space", "space"],
    "vexNotes": [
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['eb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['eb/4'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['bb/4'], duration: '8', accidental: 'b'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['bb/4'], duration: '2', accidental: 'b'},
      {clef: 'treble', keys: ['f/4'], duration: 'q'},
      {clef: 'treble', keys: ['bb/3'], duration: 'q', accidental: 'b'},
      {clef: 'treble', keys: ['g/4'], duration: '2', dot: true}
    ]
  },
  {
    "title": "Old McDonald",
    "bpm": 80,
    "notes": ["G4 G4", "G4 D4", "E4 E4", "D4", "B4 B4", "A4 A4", "G4", "rest D4", "G4 G4", "G4 D4", "E4 E4", "D4", "B4 B4", "A4 A4", "G4", "rest"],
    "vexNotes": [
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8r'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['e/4'], duration: '8'},
      {clef: 'treble', keys: ['d/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['b/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['a/4'], duration: '8'},
      {clef: 'treble', keys: ['g/4'], duration: 'q'},
      {clef: 'treble', keys: ['b/4'], duration: 'qr'}
    ]
  },
]

module.exports = challenges;
