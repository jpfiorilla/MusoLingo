var slides = [{
  "title": "Basic rhythmic notation",
  "number": 1,
  "slideContent": [
    {
      "text": "Welcome to MusoLingo!"
    },
    {
      'text': 'The first thing we will cover is how to read music.'
    }
  ],
  "lesson_id": 1
}, {
  "title": "Whole notes",
  "number": 2,
  "slideContent": [
    {
      'text': 'This is a <b>whole note</b>. It indicates that a note is to be held for <b>four (4) beats</b>.'
    },
    {
      "img": "http://i.imgur.com/69AJB7X.png"
    },
    {
      vex: {
        type: SingleRhythmNote,
        info: 'w'
      }
    }
  ],
  "lesson_id": 1
}, {
  "title": "Half & quarter notes",
  "number": 3,
  "slideContent": [
    {
      text: "This is a <b>half note</b>. It's worth half the duration of a whole note, or <b>two (2) beats.</b>"
    },
    {
      "img": "http://i.imgur.com/w2N9QO3.png"
    },
    {
      text: "Similarly, <b>quarter notes</b> are worth half of eighth notes, or <b>one (1) beat</b>."
    },
    {
      "img": "http://i.imgur.com/Wq8bHjw.png"
    },
  ],
  "lesson_id": 1
}, {
  "title": "Eighth notes",
  "number": 4,
  "slideContent": [
    {
      text: "This is an <b>eighth note</b>. It's worth half a quarter note, or one <b>half of a beat (1/2)</b>."
    },
    {
      "img": "http://i.imgur.com/iv4GeCq.png"
    },
    {
      "text": "When two eighth notes are written in sequence, they are attached together with a <b>stem</b>."
    },
    {
      img: "http://i.imgur.com/HdYQtYg.png"
    }
  ],
  "lesson_id": 1
}, {
  "title": "Sixteenth notes",
  "number": 5,
  "slideContent": [
    {
      text: "This is a <b>sixteenth note</b>. It's worth half an eighth note, or <b>one quarter of a beat (1/4)</b>."
    },
    {
      "img": "http://i.imgur.com/PvRcW43.png"
    },
    {
      "text": "Like eighth notes, when two sixteenth notes are written in sequence, they are attached together with a stem."
    },
    {
      img: "http://i.imgur.com/e3lyfNN.png"
    }
  ],
  "lesson_id": 1
}];

module.exports = slides;
