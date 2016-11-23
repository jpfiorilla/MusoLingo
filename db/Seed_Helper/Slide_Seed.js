var _ = require('lodash');

var lessononeone = [{
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
    // {
    //   "img": "http://i.imgur.com/69AJB7X.png"
    // },
    {
      vex: {
        type: 'SingleRhythmNote',
        num: '1',
        info: ['w']
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
    // {
    //   "img": "http://i.imgur.com/w2N9QO3.png"
    // },
    {
      vex: {
        type: 'SingleRhythmNote',
        num: '1',
        info: ['h']
      }
    },
    {
      text: "Similarly, <b>quarter notes</b> are worth half of eighth notes, or <b>one (1) beat</b>."
    },
    // {
    //   "img": "http://i.imgur.com/Wq8bHjw.png"
    // },
    {
      vex: {
        type: 'SingleRhythmNote',
        num: '2',
        info: ['q']
      }
    }
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

lessononetwo = [{
  "title": "Notes on the staff",
  "slideContent": [
    {
      text: "Notes are read on a staff. A staff is a set of five lines which define what key the note is played on."
    }, {
      img: ''
    }
  ]
}, {
  "title": "Notes on the treble clef",
  "slideContent": [
    {
      text: "The symbol on the left of the staff is the treble clef. This indicates that the notes on the spaces of this staff are F A C E."
    }, {
      img: ""
    }, {
      text: "This note, for example, is an F."
    }
  ]
}, {
  "title": "Notes on the treble clef",
  "slideContent": [
    {
      text: "Notes ascend in alphabetical order, so the notes on the lines here would be E G B D F."
    }, {
      img: ""
    }
  ]
}, {
  "title": "Notes on the treble clef",
  "slideContent": [
    {
      text: "As you might have noticed, the names of notes wrap around from G to A. This means there are multiple notes of each letter name."
    }, {
      img: ""
    }, {
      text: "Both of these notes are 'C.' The lower one is 'middle C,' also known as C4. This is the C nearest the middle of the piano."
    }
  ]
}, {
  "title": "Accidentals",
  "slideContent": [
    {
      text: "Notes can be modified by a half-step with symbols known as accidentals. These are played on a piano's black keys."
    }, {
      img: ""
    }, {
      text: "There are two types of accidentals, sharps (#) and flats (b)."
    }
  ]
}, {
  "title": "Accidentals",
  "slideContent": [
    {
      text: "A sharp raises the affected note by a half-step, and a flat lowers the note."
    }, {
      img: ""
    }, {
      text: "The two notes you see here (D# and Eb) are actually the same key on a piano. D# and Eb are known as 'enharmonics' of each other."
    }
  ]
}, {
  "title": "Accidentals",
  "slideContent": [
    {
      text: "When a note is written with an accidental, that accidental applies to each subsequent note on that line for the rest of the measure."
    }, {
      img: ""
    }, {
      text: "The 'natural' symbol displayed here cancels that effect. Thus the notes in this measure are: B, Bb, Bb, B."
    }
  ]
}];
lessononetwo.forEach((slide, idx) => {
  slide.lesson_id = 2;
  slide.number = idx + 1;
});

lessononethree = [{
  "title": "Time signatures",
  "slideContent": [
    {
      text: "As you may have noticed, written music is usually prefaced by a figure composed of two numbers, one stacked atop the other."
    }, {
      img: ''
    }, {
      text: "This is known as a 'time signature,' and it indicates the number of beats in that measure and all proceeding measures."
    }
  ]
}, {
  "title": "Time signatures",
  "slideContent": [
    {
      text: "As you may have noticed, written music is usually prefaced by a figure composed of two numbers, one stacked atop the other."
    }, {
      img: ''
    }, {
      text: "This is known as a 'time signature,' and it indicates the number of beats in that measure and all proceeding measures."
    }
  ]
}, {
  "title": "Time signatures",
  "slideContent": [
    {
      text: "The bottom number indicates which note is considered one 'beat' when counting a measure. A 4 indicates a quarter note, an 8 indicates an eithth note, and so on."
    }, {
      img: ''
    }, {
      text: "The top number indicates how many of that beat comprises the timespan of a measure. Thus, this time signature, 4/4, means each measure is made up of four quarter notes."
    }
  ]
}, {
  "title": "4/4",
  "slideContent": [
    {
      text: "A 4/4 time signature is the most common time signature in western music."
    }, {
      img: ''
    }, {
      text: "Because of this, it is sometimes written simply as a large C."
    }
  ]
}, {
  "title": "Other time signatures",
  "slideContent": [
    {
      text: "Other common time signatures include 2/4 ('oom-pah'), 3/4 (as in a waltz), and 6/8 (a hybrid of 2/4 and 3/4)."
    }, {
      img: ''
    }, {
      text: "Each implies a different rhythmic feel. As you play music in each of these, you'll naturally develop an understanding of how they sound."
    }
  ]
}
];
lessononethree.forEach((slide, idx) => {
  slide.lesson_id = 3;
  slide.number = idx + 1;
});

lessononefour = [{
  "title": "Bass clef",
  "slideContent": [
    {
      text: "Temp"
    }, {
      img: ''
    }
  ]
}
];
lessononefour.forEach((slide, idx) => {
  slide.lesson_id = 4;
  slide.number = idx + 1;
});

lessontwoone = [{
  "title": "Intervals - semitones",
  "slideContent": [
    {
      text: "An interval is defined as the space between two notes."
    }, {
      img: ''
    }, {
      text: ""
    }
  ]
}]
lessontwoone.forEach((slide, idx) => {
  slide.lesson_id = 5;
  slide.number = idx + 1;
});

const slides = _.flatten([lessononeone, lessononetwo, lessononethree, lessononefour, lessontwoone]);

module.exports = slides;
