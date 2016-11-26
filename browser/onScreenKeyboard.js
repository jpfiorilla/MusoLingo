import Tone from 'tone';
import { polySynth } from './instruments';

// give on screen keyboard audio functionality; when a certain note is clicked, trigger a note from polySynth

export function mapSoundsToPiano(){
  // fills an array with all the keys on the DOM (2 octaves)
  var body = document.querySelector('body')
  var keyArray = ['C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4']
  .map(note => document.querySelector(`.${note}`));
  // triggers same note as key on mousedown
  keyArray.forEach(key => {
    key.onmousedown = function (){
      polySynth.triggerAttack(`${key.dataset.ipn}`)
    }
  })
  // releases note on mouseup; rewrite to allow releasing off of the key note
  keyArray.forEach(key => {
    key.onmouseup = function (){
      polySynth.triggerRelease(`${key.dataset.ipn}`)
    }
  })
}

export function mapSoundsToComputerKeyboard(){
  // prevents keydown event from being retriggered when key is held down
  var keyAllowed = {}

  document.addEventListener('keydown', (event) => {
    if (keyAllowed[event.key] === false) return;
    keyAllowed[event.key] = false;
    noteTrigger(event.key);
  })

  document.addEventListener('keyup', (event) => {
    noteRelease(event.key);
    keyAllowed[event.key] = true;
  })
}

function noteTrigger(keyName){
  switch (keyName){
    case 'Tab': polySynth.triggerAttack('C3')
                break;
    case 'q': polySynth.triggerAttack('D3')
              break;
    case 'w': polySynth.triggerAttack('E3')
              break;
    case 'e': polySynth.triggerAttack('F3')
              break;
    case 'r': polySynth.triggerAttack('G3')
              break;
    case 't': polySynth.triggerAttack('A3')
              break;
    case 'y': polySynth.triggerAttack('B3')
              break;
    case 'u': polySynth.triggerAttack('C4')
              break;
    case 'i': polySynth.triggerAttack('D4')
              break;
    case 'o': polySynth.triggerAttack('E4')
              break;
    case 'p': polySynth.triggerAttack('F4')
              break;
    case '[': polySynth.triggerAttack('G4')
              break;
    case ']': polySynth.triggerAttack('A4')
              break;
    case '1': polySynth.triggerAttack('C#3')
              break;
    case '2': polySynth.triggerAttack('D#3')
              break;
    case '4': polySynth.triggerAttack('F#3')
              break;
    case '5': polySynth.triggerAttack('G#3')
              break;
    case '6': polySynth.triggerAttack('A#3')
              break;
    case '8': polySynth.triggerAttack('C#4')
              break;
    case '9': polySynth.triggerAttack('D#4')
              break;
    case '-': polySynth.triggerAttack('F#4')
              break;
    case '=': polySynth.triggerAttack('G#4')
              break;
    case 'Backspace': polySynth.triggerAttack('A#4')
              break;
    default: console.log(keyName)
  }
}

function noteRelease(keyName){
  switch (keyName){
    case 'Tab': polySynth.triggerRelease('C3')
                break;
    case 'q': polySynth.triggerRelease('D3')
              break;
    case 'w': polySynth.triggerRelease('E3')
              break;
    case 'e': polySynth.triggerRelease('F3')
              break;
    case 'r': polySynth.triggerRelease('G3')
              break;
    case 't': polySynth.triggerRelease('A3')
              break;
    case 'y': polySynth.triggerRelease('B3')
              break;
    case 'u': polySynth.triggerRelease('C4')
              break;
    case 'i': polySynth.triggerRelease('D4')
              break;
    case 'o': polySynth.triggerRelease('E4')
              break;
    case 'p': polySynth.triggerRelease('F4')
              break;
    case '[': polySynth.triggerRelease('G4')
              break;
    case ']': polySynth.triggerRelease('A4')
              break;
    case '1': polySynth.triggerRelease('C#3')
              break;
    case '2': polySynth.triggerRelease('D#3')
              break;
    case '4': polySynth.triggerRelease('F#3')
              break;
    case '5': polySynth.triggerRelease('G#3')
              break;
    case '6': polySynth.triggerRelease('A#3')
              break;
    case '8': polySynth.triggerRelease('C#4')
              break;
    case '9': polySynth.triggerRelease('D#4')
              break;
    case '-': polySynth.triggerRelease('F#4')
              break;
    case '=': polySynth.triggerRelease('G#4')
              break;
    case 'Backspace': polySynth.triggerRelease('A#4')
              break;
    default: console.log(keyName)
  }
}
