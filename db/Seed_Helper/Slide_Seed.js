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
  slide.lesson_id = 3;
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

lessontwoone = [
   {
  "title": "1",
  "number": 1,
  "slideContent": [
    {
      text: "We learned that there are 12 notes from A to G#, including the accidentals."
    }, {
      text: "But a piano has much more than just 12 keys. So what notes do all those other keys correspond to?"
    }
  ],
  "lesson_id": 5
}, {
  "title": "2",
  "number": 2,
  "slideContent": [
    {
      text: "You may have noticed that all keyboards have the same repeating pattern of 12 keys. Each of these sets of 12 corresponds to a single octave."
    },
    {
      img: '' // insert image of piano octaves
    },
    {
      text: "Each octave contains the 12 notes from A to G#. However, the sounds produced aren't exactly the same. As we move right along the keyboard, we are ascending octaves, and the notes have a higher pitch."
    }
  ],
  "lesson_id": 5
}, {
  "title": "3",
  "number": 3,
  "slideContent": [
    {
      text: "A note's letter name tells us which note it is, but it doesn't tell us which octave that note is in."
    },
    {
      text: "Fortunately, a musical staff does."
    },
    // {
    //   vex: {
    //     type: '',
    //     num: '',
    //     info: [],
    //   }
    // },
    {
      text: "Both of these notes represent C. But the one on the left represents C in the fourth octave (C3), while the one on the right represents C in the fifth octave (C4)." // add sound sample that plays both C notes?
    }
  ],
  "lesson_id": 5,
}, {
  "title": "4",
  "number": 4,
  "slideContent": [
    {
      text: "If you were playing on a full 88-key piano, the lowest note would be A0. C4 would be the fourth C key moving from the left."
    },
    {
      img: '' // insert image of C4/middle C
    },
    {
      text: "On a smaller keyboard, like many MIDI keyboards, the notes may be mapped out differently, and the starting octave can usually be adjusted with a button. Our on-screen keyboard starts with C3 and ends at B4"
    }
  ],
  "lesson_id": 5
}, {
  "title": "5",
  "number": 5,
  "slideContent": [
    {
      text: "A half-step, or 'semitone,' describes the distance between two consecutive notes. Two consecutive half-steps in a row may also be called a whole-step."
    },
    {
      vex: '' // show a half step and a whole step
    },
    {
      text: "There is one half-step between F and Gb. There is one whole step between F and G. And there are four half-steps, or two whole-steps, between G and A. And so on..."
    }
  ],
  "lesson_id": 5
}, {
  "title": "6",
  "number": 6,
  "slideContent": [
    {
      text: "Half-steps and octaves will be very useful in understanding our next topic - intervals!"
    }
  ],
  "lesson_id": 5
}
]
lessontwoone.forEach((slide, idx) => {
  slide.lesson_id = 5;
  slide.number = idx + 1;
});

lessontwotwo = [
  {
    "title": "1",
    "slideContent": [
      {
        text: "In music theory, an interval describes the distance between two notes."
      },
      {
        text: "There are two aspects to intervals: distance and quality. This lesson will cover distance."
      }
    ]
  },
  {
    "title": "2",
    "slideContent": [
      // {
      //   vex: { // c3 and d3
      //
      //   }
      // },
      {
        text: "Let's start with C3 and D3. In terms of distance, the interval between these two notes will always be a second, regardless of any accidentals in either note."
      },
      {
        text: "This goes for all consecutive letter names, as long as they're in the same octave."
      }
    ]
  },
  {
    "title": "3",
    "slideContent": [
      {
        vex: { // c3 and e3

        }
      },
      {
        text: "Just as any interval between C and D is a second, any interval between C and E is a third."
      }
    ]
  },
  {
    "title": "4",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "Are you starting to see a pattern? The interval between C and F is a fourth."
      }
    ]
  },
  {
    "title": "5",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "C and G form a fifth."
      }
    ]
  },
  {
    "title": "6",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "C and A form a sixth."
      }
    ]
  },
  {
    "title": "7",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "C and B form a seventh."
      }
    ]
  },
  {
    "title": "8",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "What interval do we get if we compare C with the C in the next octave? I just said it: an octave!"
      }
    ]
  },
  {
    "title": "9",
    "slideContent": [
      {
        vex: {

        }
      },
      {
        text: "Intervals can also be counted downward. For example, G2 can be described as being a fourth below C3. If we were to count upward however, they would form a fifth"
      },
      {
        text: "Don't worry too much about counting downward. For our purposes, we'll mostly be counting upward."
      }
    ]
  },
  {
    "title": "10",
    "slideContent": [
      {
        text: "The quiz for this lesson will test your ability to identify intervals based on distance. Try to get used to how different intervals look on a staff. This skill will be invaluable as you continue your study of harmony."
      }
    ]
  }
]
lessontwotwo.forEach((slide, idx) => {
  slide.lesson_id = 6;
  slide.number = idx + 1;
});

lessontwothree = [
  {
    "title": '',
    "slideContent": [
      {
        text: "The distance aspect of intervals is pretty straightforward, right? It's just simple counting."
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        vex: { // c3 and d3

        }
      },
      {
        text: "Let's take another look at C3 and D3. Remember when I said that the interval between these notes will always be a second, regardless of whether or not accidentals show up in either note?"
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        vex: { // c3 and d3, another of c3 and Db3

        }
      },
      {
        text: "Both of these intervals are seconds, but they are NOT the same interval. If we were to play each of them, they would sound different."
      }, // sound sample of both intervals?
      {
        text: "Even though these intervals have the same distance, they differ in <b>quality</b>. C and Db are consecutive notes, with a single <b>half-step</b> between them."
      },
      { // possible move to a new slide
        text: "Their interval quality is <b>minor</b>, and the full name of the intervals is a <b>minor second</b>."
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        vex: { // C and Eb; C and E

        }
      },
      {
        text: "Since we have C and some variation of E in both of these examples, we know that both intervals are <b>thirds</b>."
      },
      {
        text: "There are 3 half-steps between C and Eb, so they form a <b>minor third</b>. There are 4 half-steps between C and E, so they form a <b>major third</b>."
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        text: "Starting to see the pattern? The quality of the interval is determined by the number of half-steps between the two notes."
      },
      {
        img: ''// table comparing # of semitones to interval name
      },
      {
        text: "The terminology changes once we get to fourths and fifths, but the concepts are the same."
      }
    ]
  },
]
lessontwothree.forEach((slide, idx) => {
  slide.lesson_id = 7;
  slide.number = idx + 1;
});

lessonthreeone = [{
  "title": "Triads",
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
lessonthreeone.forEach((slide, idx) => {
  slide.lesson_id = 8;
  slide.number = idx + 1;
});

const slides = _.flatten([lessononeone, lessononetwo, lessononethree, lessononefour, lessontwoone, lessontwotwo, lessontwothree, lessonthreeone]);

module.exports = slides;
