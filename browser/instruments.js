import Tone from 'tone';

export const polySynth = new Tone.PolySynth(6, Tone.Synth, {
  "oscillator" : {
    "partials" : [0, 2, 3, 4],
  },
  "volume": -18
}).toMaster();

export const metronome = new Tone.Player({
  "url": "/sounds/MPCmetronome.wav",
  "volume": 24
}).toMaster();

export const metronomeGain = new Tone.Volume(18);

// export const piano = new Tone.MultiPlayer({
//   "C3": "path",
//   "C#3": "path",
//   "D3": "path",
//   "D#3": "path",
//   "E3": "path",
//   "F3": "path",
//   "F#3": "path",
//   "G3": "path",
//   "G#3": "path",
//   "A3": "path",
//   "A#3": "path",
//   "B3": "path",
//   "C4": "path",
//   "C#4": "path",
//   "D4": "path",
//   "D#4": "path",
//   "E4": "path",
//   "F4": "path",
//   "F#4": "path",
//   "G4": "path",
//   "G#4": "path",
//   "A4": "path,
//   "B4": "path",
//
// })
// metronome.chain(metronomeGain, Tone.Master);
