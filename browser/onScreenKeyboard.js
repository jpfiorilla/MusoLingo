import Tone from 'tone';
import { polySynth } from './instruments';

// fills an array with all the keys on the DOM (2 octaves)
export function selectKeysOnDOM(){
  var keyArray = ['C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4']
  .map(note => document.querySelector(`.${note}`));

  return keyArray;
}

export function mapSoundsToPiano(keyArray){
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
  var onScreenKeyboard = document.querySelector('#keyboard')
  // prevents keydown event from being retriggered when key is held down
  var keyAllowed = {}

  document.addEventListener('keydown', (event) => {
    if (keyAllowed[event.key] === false) return;
    keyAllowed[event.key] = false;
    // won't play notes if keyboard is hidden
    if (onScreenKeyboard.style.display !== 'none'){
      noteTrigger(event.key);
    }
  })

  document.addEventListener('keyup', (event) => {
    if (onScreenKeyboard.style.display !== 'none'){
      noteRelease(event.key);
    }
    keyAllowed[event.key] = true;
  })
}

// triggers or releases note and changes color
function noteAction(note, index, color, type){
  var keys = selectKeysOnDOM();

  if (type === 'attack') polySynth.triggerAttack(note)
  else if (type === 'release') polySynth.triggerRelease(note)

  keys[index].style.background = color;
}

// maps keydown events to proper keys
function noteTrigger(keyName){
  switch (keyName){
    case 'Tab': noteAction('C3', 0, '#00c4ff', 'attack')
                break;
    case 'q': noteAction('D3', 2, '#00c4ff', 'attack')
              break;
    case 'w': noteAction('E3', 4, '#00c4ff', 'attack')
              break;
    case 'e': noteAction('F3', 5, '#00c4ff', 'attack')
              break;
    case 'r': noteAction('G3', 7, '#00c4ff', 'attack')
              break;
    case 't': noteAction('A3', 9, '#00c4ff', 'attack')
              break;
    case 'y': noteAction('B3', 11, '#00c4ff', 'attack')
              break;
    case 'u': noteAction('C4', 12, '#00c4ff', 'attack')
              break;
    case 'i': noteAction('D4', 14, '#00c4ff', 'attack')
              break;
    case 'o': noteAction('E4', 16, '#00c4ff', 'attack')
              break;
    case 'p': noteAction('F4', 17, '#00c4ff', 'attack')
              break;
    case '[': noteAction('G4', 19, '#00c4ff', 'attack')
              break;
    case ']': noteAction('A4', 21, '#00c4ff', 'attack')
              break;
    case '\\': noteAction('B4', 23, '#00c4ff', 'attack')
               break;
    case '1': noteAction('Db3', 1, '#00c4ff', 'attack')
              break;
    case '2': noteAction('Eb3', 3, '#00c4ff', 'attack')
              break;
    case '4': noteAction('Gb3', 6, '#00c4ff', 'attack')
              break;
    case '5': noteAction('Ab3', 8, '#00c4ff', 'attack')
              break;
    case '6': noteAction('Bb3', 10, '#00c4ff', 'attack')
              break;
    case '8': noteAction('Db4', 13, '#00c4ff', 'attack')
              break;
    case '9': noteAction('Eb4', 15, '#00c4ff', 'attack')
              break;
    case '-': noteAction('Gb4', 18, '#00c4ff', 'attack')
              break;
    case '=': noteAction('Ab4', 20, '#00c4ff', 'attack')
              break;
    case 'Backspace': noteAction('Bb4', 22, '#00c4ff', 'attack')
              break;
    default: console.log(keyName)
  }
}

// maps keyup events to proper keys
function noteRelease(keyName){
  switch (keyName){
    case 'Tab': noteAction('C3', 0, '#f5f5f5', 'release')
                break;
    case 'q': noteAction('D3', 2, '#f5f5f5', 'release')
              break;
    case 'w': noteAction('E3', 4, '#f5f5f5', 'release')
              break;
    case 'e': noteAction('F3', 5, '#f5f5f5', 'release')
              break;
    case 'r': noteAction('G3', 7, '#f5f5f5', 'release')
              break;
    case 't': noteAction('A3', 9, '#f5f5f5', 'release')
              break;
    case 'y': noteAction('B3', 11, '#f5f5f5', 'release')
              break;
    case 'u': noteAction('C4', 12, '#f5f5f5', 'release')
              break;
    case 'i': noteAction('D4', 14, '#f5f5f5', 'release')
              break;
    case 'o': noteAction('E4', 16, '#f5f5f5', 'release')
              break;
    case 'p': noteAction('F4', 17, '#f5f5f5', 'release')
              break;
    case '[': noteAction('G4', 19, '#f5f5f5', 'release')
              break;
    case ']': noteAction('A4', 21, '#f5f5f5', 'release')
              break;
    case '\\': noteAction('B4', 23, '#f5f5f5', 'release')
               break;
   case '1': noteAction('Db3', 1, '#333', 'release')
             break;
   case '2': noteAction('Eb3', 3, '#333', 'release')
             break;
   case '4': noteAction('Gb3', 6, '#333', 'release')
             break;
   case '5': noteAction('Ab3', 8, '#333', 'release')
             break;
   case '6': noteAction('Bb3', 10, '#333', 'release')
             break;
   case '8': noteAction('Db4', 13, '#333', 'release')
             break;
   case '9': noteAction('Eb4', 15, '#333', 'release')
             break;
   case '-': noteAction('Gb4', 18, '#333', 'release')
             break;
   case '=': noteAction('Ab4', 20, '#333', 'release')
             break;
   case 'Backspace': noteAction('Bb4', 22, '#333', 'release')
             break;
    default: console.log(keyName)
  }
}

// keyboard show/hide toggle functionality
export function toggleKeyboardDisplay(){
  var showButton = document.querySelector('#showKeyboard');
  var onScreenKeyboard = document.querySelector('#keyboard');

  showButton.onclick = function(){
    onScreenKeyboard.style.display = (onScreenKeyboard.style.display === 'none' ? '':'none')

    showButton.innerHTML = (onScreenKeyboard.style.display === 'none' ? 'Show Keyboard' : 'Hide Keyboard')
  }
}
