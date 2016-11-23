import tonal from 'tonal';
import Tone from 'tone';
import { polySynth, metronome } from './instruments'
import Challenge, { pullScore, updateColor } from './components/Challenge/Challenge'

// noteSequence is an array. First value is the note sequence to be played, second is the duration of the click
var noteSequence = [["C4", ["D4", "E4", "F4"], "G4", ["A4", "G4"]], "4n"]
var noteSequence = [["C4", ["D4", "E4", "F4"], "G4", ["A4", "G4"], "B4", "D#4", "Gb4", "A#4"], "4n"]
var noteSequence = [["C4", "D4", "G4", "A4"], "4n"]
// var noteSequence = [["C4", "D4", ["A4", "D4"], ["A4", "D4"]], "4n"]
// var noteSequence = [[["A4", "G4"], ["A4", "G4"], ["A4", "G4"], "A4"], "4n"]
// var noteSequence = [[["A4", "G4"], ["A4", "G4"], "G4", ["A4", "B4", "C5"]], "4n"]
// var noteSequence = [[["A4", "G4", "D4", "G4"], ["A4", "G4", "D4", "G4"], ["A4", "G4", "D4", "G4"], ["A4", "G4", "D4", "G4"]], "4n"]

var data, cmd, channel, type, note, midi, frequency, velocity, currentNote = { note: '', triggered: false }, currentBeat, currentMeasure = -1.25, currentScore = 0, visualNotes = [], currentVisualNote, visualNoteCounter;

var circle = document.getElementById('circle');

Tone.Transport.bpm.value = 80;
// 60 / bpm gives length in seconds of quarter note; 240 gives length of 1 measure
var startingPoint = (240 / Tone.Transport.bpm.value);
// that same number divided by 80 will give you around 1/5th of a sixteenth note
var offsetSeconds = (240 / Tone.Transport.bpm.value) / 80;

// request MIDI access
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess({
        sysex: false // this defaults to 'false' and we won't be covering sysex in this article.
    }).then(onMIDISuccess, onMIDIFailure);
} else {
    alert("No MIDI support in your browser.");
}

// midi functions
function onMIDISuccess(midiAccess) {
    // when we get a succesful response, run this code
    console.log('MIDI Access Object', midiAccess);
    midi = midiAccess;
    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
      input.value.onmidimessage = onMIDIMessage;
    }
}

function onMIDIFailure(e) {
    // when we get a failed response, run this code
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + e);
}

function onMIDIMessage(event) {
  data = event.data; // this gives us our [command/channel, note, velocity] data.
  // console.log('MIDI data', data); // MIDI data [144, 63, 73]
  cmd = data[0] >> 4,
  channel = data[0] & 0xf,
  type = data[0] & 0xf0, // channel agnostic message type.
  note = data[1],
  frequency = frequencyFromNoteNumber(note)
  velocity = data[2];
  // with pressure and tilt off
  // note off: 128, cmd: 8
  // note on: 144, cmd: 9
  // pressure / tilt on
  // pressure: 176, cmd 11:
  // bend: 224, cmd: 14

  switch (type) {
      case 144: // noteOn message
       noteOn(note, velocity, frequency);
       break;
      case 128: // noteOff message
        noteOff(note, velocity, frequency);
        break;
  }
  //console.log('data', data, 'cmd', cmd, 'channel', channel);
}

function noteOn(midiNote, velocity, frequency) {
  polySynth.triggerAttack(frequency, null, velocity)
  let timeTriggered = Tone.Transport.position;

  if (currentNote.triggered === false) {
    if (pitchAccuracy(midiNote)) {
      rhythmicAccuracy(timeTriggered, noteDuration())
    } else {
      noteHit(false)
    }
  }

  currentNote.triggered = true;
}

// rewrite to have noteOff measure duration note is held? could require longer notes to be sustained for longer; allow a generous margin of error
function noteOff(midiNote, velocity, frequency) {
  // console.log('lifted up', Tone.Transport)
  polySynth.triggerRelease(frequency)
}

function frequencyFromNoteNumber(note) {
    return 440 * Math.pow(2, (note - 69) / 12);
}


function pitchAccuracy(midiNote){
  console.log(currentNote.note, tonal.note.fromMidi(midiNote))

  if (currentNote.note === tonal.note.fromMidi(midiNote)) return true;
  else return false;

}

function noteDuration(){
  // helper function that sets and returns noteDuration based on length of note; 1 = quarter, 2 = eighth, 3 = triplet, 4 = sixteenths

  if (typeof noteSequence[0][currentBeat + (Math.floor(currentMeasure) * 4)] === 'string') return 1;
  else if (typeof noteSequence[0][currentBeat + (Math.floor(currentMeasure) * 4)] === 'object') return noteSequence[0][currentBeat + (Math.floor(currentMeasure) * 4)].length;
  // special case for the first note
  else {
    if (typeof noteSequence[0][0] === 'string') return 1;
    else if (typeof noteSequence[0][0] === 'object') return noteSequence[0][0].length;
  }
}

function noteHit(result){
  if (result === true) {
    currentScore++;
    currentVisualNote.setStyle({strokeStyle: "green", fillStyle: "green"})
    updateColor(visualNotes)
  }
  else if (result === false) {
    currentVisualNote.setStyle({strokeStyle: "red", fillStyle: "red"})
    updateColor(visualNotes)
  }
}

// takes Tone.Transport.position when key is pressed down, and noteDuration of currentNote
function rhythmicAccuracy(timePlayed, noteDuration){
  let decimal = Number(timePlayed.split(':')[2]);
  switch (noteDuration) {
    // quarter notes
    case 1:
      if (decimal >= 3.792 || decimal <= 0.208){
        noteHit(true)
        console.log("QUARTER NOTE HIT", decimal)
      } else {
        noteHit(false)
      }
      break;
    // eighth notes
    case 2:
      if (decimal >= 3.792 || decimal <= 0.208 || (decimal >= 1.792 && decimal <= 2.208) ){
        noteHit(true)
        console.log("EIGHTH NOTE HIT", decimal)
      } else {
        noteHit(false)
      }
      break;
    // triplets
    case 3:
      if (decimal >= 3.792 || decimal <= 0.208 || (decimal >= 1.125 && decimal <= 1.541) || (decimal >= 2.459 && decimal <= 2.875)){
        noteHit(true)
        console.log("TRIPLET NOTE HIT", decimal)
      } else {
        noteHit(true)
      }
      break;
    // sixteenth notes
    case 4:
      if (decimal >= 3.792 || decimal <= 0.208 || (decimal >= 0.792 && decimal <= 1.208) || (decimal >= 1.792 && decimal <= 2.208) || (decimal >= 2.792 && decimal <= 3.208)){
        noteHit(true)
        console.log("SIXTEENTH NOTE HIT", decimal);
      } else {
        noteHit(false)
      }
      break;
    default: console.log("I WAS NOT PREPARED FOR THIS SHIT", noteDuration, decimal)
  }
}

// metronome loop, which simply needs subdivision time and a corresponding number of events
  var seq = new Tone.Sequence(function(time, note){
    metronome.start(0);
    // increments currentMeasure by one beat every time it clicks; starts at -1 b/c of count-in; must refactor to work with time signatures other than 4
    currentMeasure += .25
    console.log(Tone.Transport.position)
  }, [0,1,2,3], noteSequence[1]);

  // 2nd loop, which looks at the sequence of notes and sets currentNote and currentBeat
  // currentNote.note is used as a reference by pitchAccuracy function to see if the correct note was played. It is set 1/5th of a sixteenth note early so that notes can be played slightly ahead of time and still count as correct
  // currentBeat is used by noteDuration(), which looks at the corresponding note/set of notes with the same index in noteSequence[0]. rhythmicAccuracy uses the noteDuration to determine the subdivision of the currentNotes that are supposed to be played. The conditional statements set the beat 1/5th of a sixteenth ahead of the currentNote, so that we're looking at the proper subdivision
function loopCreator(notes){
  var noteSetterLoop = new Tone.Sequence(function(time, note){
    let sixteenth = Tone.Transport.position.split(':')[2];
    let beat = Tone.Transport.position.split(':')[1];
    if (sixteenth === '3.792' && beat === '3'){
      currentBeat = 0;
    } else if (sixteenth === '3.792'){
      currentBeat = Number(beat) + 1;
    } else {
      currentBeat = Number(beat);
    }

    // if no key was pressed for the previous note, turn that note red; MUST occur before new currentNote is defined
    if (currentNote.triggered === false && visualNoteCounter > 0){
      noteHit(false)
    }
    // redefines currentNote
    currentNote.note = note;
    currentNote.triggered = false;
    currentVisualNote = visualNotes[visualNoteCounter];
    visualNoteCounter++;
    // console.log(visualNoteCounter, currentVisualNote)
  }, notes, noteSequence[1]);

  return noteSetterLoop;
}

export const startSequence = function(notesToPlay, bpm, numCorrect, vexflowNotes){
  // resets current score when restarting game
  currentScore = 0, visualNoteCounter = 0;
  visualNotes = vexflowNotes;
  var noteSetterLoop = loopCreator(notesToPlay)
  noteSequence[0] = notesToPlay;
  Tone.Transport.bpm.value = bpm;
  let endTime = stopTime();

  seq.start();
  // slight offset equal to bpm/4800 (approx. 1/5th of a sixteenth note, so that the currentNote gets re-assigned slightly ahead of the metronome)
  noteSetterLoop.start(startingPoint-offsetSeconds);
  Tone.Transport.start();
  // console.log(seq)
  seq.stop(endTime);
  noteSetterLoop.stop(endTime);
  Tone.Transport.scheduleOnce(function(){
    pullScore(currentScore)
    console.log("VISUAL NOTES", visualNotes)
  }, endTime)
}

export const stopSequence = function(){
  // Tone.Transport.cancel();
  Tone.Transport.stop();
  currentMeasure = -1.25;
  console.log("STOPPED")
}

// looks at number of notes in sequence, as well as subdivision for beats, and determines when the loop should stop
function stopTime(){
  // replace 4 with whatever subdivision variable that the sequence is in
  let bars = Math.floor(noteSequence[0].length / 4 ) + 1;
  let beats = noteSequence[0].length - ((bars - 1) * 4);
  return `${bars}:${beats}:0`
}
