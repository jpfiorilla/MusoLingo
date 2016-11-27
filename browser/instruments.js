import Tone from 'tone';

export const polySynth = new Tone.PolySynth(6, Tone.Synth, {
  "oscillator" : {
    "partials" : [0, 2, 3, 4],
  },
  "volume": -24
}).toMaster();

export const metronome = new Tone.Player("/sounds/MPCmetronome.wav");

export const metronomeGain = new Tone.Volume(12);

metronome.chain(metronomeGain, Tone.Master);
