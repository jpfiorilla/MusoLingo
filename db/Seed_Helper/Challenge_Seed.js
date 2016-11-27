// for notes, enter eighth, triplet and sixteenth notes as strings with extra spaces
const challenges = [
  {
    "bpm": 80,
    "notes": ["C3", "D3", "D3", "C3 C3"],
    "vexNotes": [
      {"note": "new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/4'], duration: 'q' })"},
      {"note": "new Vex.Flow.StaveNote({clef: 'treble', keys: ['d/4'], duration: 'q' })"},
      {"note": "new Vex.Flow.StaveNote({clef: 'treble', keys: ['d/4'], duration: 'q' })"},
      {"note": "new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/4'], duration: '8' })"},
      {"note": "new Vex.Flow.StaveNote({clef: 'treble', keys: ['c/4'], duration: '8' })"}
    ]
  }
]

module.exports = challenges;
