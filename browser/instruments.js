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

// metronome.chain(metronomeGain, Tone.Master);
