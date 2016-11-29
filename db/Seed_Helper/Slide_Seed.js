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
      "text": "When two or four eighth notes are written in sequence, they are attached together with a <b>stem</b>."
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
      "text": "Like eighth notes, when two or four sixteenth notes are written in sequence, they are attached together with a stem."
    },
    {
      img: "http://i.imgur.com/e3lyfNN.png"
    }
  ],
  "lesson_id": 1
}];

lessononetwo = [{
  "title": '',
  "slideContent": [
    {
      text: "Let's learn about some more rhythmic notation."
    }
  ]
}]
lessononetwo.forEach((slide, idx) => {
  slide.lesson_id = 2;
  slide.number = idx + 1;
});

lessononethree = [{
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
      text: "Notes ascend in alphabetical order, so the notes on the lines here would be E G B D F. An easy way to remember this is through the pnuemonic <b>E</b>very <b>G</b>ood <b>B</b>oy <b>D</b>oes <b>F</b>ine."
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
lessononethree.forEach((slide, idx) => {
  slide.lesson_id = 3;
  slide.number = idx + 1;
});

lessononefour = [{
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
lessononefour.forEach((slide, idx) => {
  slide.lesson_id = 4;
  slide.number = idx + 1;
});

lessononefive = [{
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
lessononefive.forEach((slide, idx) => {
  slide.lesson_id = 5;
  slide.number = idx + 1;
});

lessontwoone = [
   {
  "title": "1",
  "number": 1,
  "slideContent": [
    {
      text: "We learned that there are 12 different notes in terms of pitch. Each note is triggered by a different key."
    }, {
      img: "/images/lessons_pictures/12semitones.png",
      style: {
        position: "relative",
        left: "-11%",
        padding: "40px"
      }
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
      text: "You may have noticed that all keyboards have the same repeating pattern of 12 keys. Each of these sets of 12 corresponds to a single <b>octave</b>."
    },
    {
      img: "/images/lessons_pictures/octavesgraphic.png",
      style: {
        padding: "5px 0 25px 0"
      }
    },
    {
      text: "Each octave contains all of the 12 notes. However, the sounds produced by a C in one octave and a C in a different octave aren't exactly the same. As we move right along the keyboard, we are ascending octaves, and the notes have a higher pitch."
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
    {
      img: "/images/lessons_pictures/c2.jpg",
      style: {
        padding: "10px"
      }
    },
    {
      img: "/images/lessons_pictures/c51.png",
      style: {
        padding: "10px 0 15px"
      }
    },
    {
      text: "Both of these notes represent C on the treble clef. But the one on the top represents C in the fourth octave (C4), while the one on the bottom represents C in the fifth octave (C5)." // add sound sample that plays both C notes?
    }
  ],
  "lesson_id": 5,
}, {
  "title": "4",
  "number": 4,
  "slideContent": [
    {
      text: "If you were playing on a full 88-key piano, the lowest note would be A0. C4 would be the fourth C key moving from the left. The blue key below is C4, and the yellow key is A4."
    },
    {
      img: "/images/lessons_pictures/fullpiano.png",
      style: {
        position: "relative",
        left: "-20%",
        padding: "30px 0 15px"
      }
    },
    {
      text: "On a smaller keyboard, like many MIDI keyboards, the notes may be mapped out differently, and the starting octave can usually be adjusted with a button. Our on-screen keyboard starts with C3 and ends at B4."
    }
  ],
  "lesson_id": 5
}, {
  "title": "5",
  "number": 5,
  "slideContent": [
    {
      text: "A <b>half-step</b>, or <b>semitone</b>, describes the distance between two consecutive notes in an octave. Two consecutive half-steps in a row may also be called a <b>whole-step</b>."
    },
    {
      img: "images/lessons_pictures/halfwholestep.png",
      style: {
        position: "relative",
        left: "-26.5%"
      }
    },
    {
      text: "There is one half-step between B and C, because there are no notes in between the two. There is one whole step between B and C#, because there is one note between the two."
    }
  ],
  "lesson_id": 5
}, {
  "title": "6",
  "number": 6,
  "slideContent": [
    {
      text: "Half-steps and octaves will be very useful in understanding our next topic - <b>intervals</b>!"
    }
  ],
  "lesson_id": 5
}
]
lessontwoone.forEach((slide, idx) => {
  slide.lesson_id = 6;
  slide.number = idx + 1;
});

lessontwotwo = [
  {
    "title": "1",
    "slideContent": [
      {
        text: "In music theory, an <b>interval</b> describes the distance between two notes."
      },
      {
        text: "There are two aspects to intervals: <b>distance</b> and <b>quality</b>. This lesson will cover distance."
      }
    ]
  },
  {
    "title": "2",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c3 d3.png"
      },
      {
        text: "Let's start with C3 and D3. In terms of distance, the interval between these two notes will always be a <b>second</b>, regardless of any accidentals in either note."
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
        img: "/images/lessons_pictures/c3 e3.png"
      },
      {
        text: "Just as any interval between C and D is a second, any interval between C and E is a <b>third</b>."
      }
    ]
  },
  {
    "title": "4",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c4 f4.png"
      },
      {
        text: "Are you starting to see a pattern? The interval between C and F is a <b>fourth</b>."
      }
    ]
  },
  {
    "title": "5",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c4 g4.png"
      },
      {
        text: "C and G form a <b>fifth</b>."
      }
    ]
  },
  {
    "title": "6",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c4 a4.png"
      },
      {
        text: "C and A form a <b>sixth</b>."
      }
    ]
  },
  {
    "title": "7",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c4 b4.png"
      },
      {
        text: "C and B form a <b>seventh</b>."
      }
    ]
  },
  {
    "title": "8",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c4 c5.png"
      },
      {
        text: "What interval do we get if we compare C with the C in the next octave? I just said it: an <b>octave</b>!"
      }
    ]
  },
  {
    "title": "9",
    "slideContent": [
      {
        img: "/images/lessons_pictures/c5 g4.png"
      },
      {
        text: "Intervals can also be counted downward. For example, G3 can be described as being a fourth <b>below</b> C4. If we were to count upward however, they would form a fifth."
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
  slide.lesson_id = 7;
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
        img: "/images/lessons_pictures/c3 d3.png"
      },
      {
        text: "Let's take another look at C3 and D3. Remember when I said that the interval between these notes will always be a <b>second</b>, regardless of whether or not accidentals show up in either note?"
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        img: "/images/lessons_pictures/c3 d3.png" // c3 and d3, another of c3 and Db3
      },
      {
        text: "Both of these intervals are seconds, but they are <b>NOT</b> the same interval. If we were to play each of them, they would sound different."
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
        img:"/images/lessons_pictures/c3 e3.png", // C and Eb; C and E

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
        img: "/images/lessons_pictures/intervalschart.png",// table comparing # of semitones to interval name
        style: {
          padding: "40px 0"
        }
      },
      {
        text: "The terminology changes once we get to fourths and fifths, but the concepts are the same."
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        text: "The tritone, which is equivalent to 6 semitones, is considered a particularly <b>dissonant</b> interval."
      },
      {
        img: "/images/lessons_pictures/tritone.png",
      },
      {
        text: "It can also be described as an <b>augmented fourth</b>, or a <b>diminished fifth</b>."
      }
    ]
  },
  {
    "title": '',
    "slideContent": [
      {
        text: "Intervals can be described as being <b>consonant</b> or <b>dissonant</b>."
      },
      {
        img: "/images/lessons_pictures/consonancedissonance.png",
      },
      {
        text: "In Western music theory, <b>consonant intervals</b> are described as being pleasant and agreeable, while <b>dissonant intervals</b> are said to create tension."
      },
    ]
  },
  {
  "title": '',
  "slideContent": [
    {
      text: "These concepts are central to <b>harmony</b>, the study of how notes interact when played simultaneously."
    },
    {
      img: "/images/lessons_pictures/consonance_dissonance.png",
      style: {
        padding: "25px 0"
      }
    },
    {
      text: "Stayed tuned for more harmony in our next lesson: <b>chords</b>!"
    }
  ]
},
]
lessontwothree.forEach((slide, idx) => {
  slide.lesson_id = 8;
  slide.number = idx + 1;
});

lessonthreeone = [
  {
  "title": "Triads",
  "slideContent": [
    {
      text: "A <b>chord</b> is a group of three or more notes that combine harmoniously when played together."
    }, {
      img: ''
    }
    ]
  }, {
    "title": "Major/Minor Chords",
    "slideContent": [
      {
        text: "The most commonly used chords in Western music are the <b>major</b> and <b>minor</b> triads."
      }, {
        img: ''
      },
      {
        text: "A <b>triad</b> is a type of chord with a structure of three notes: the <b>root</b>, the <b>third</b>, and the <b>fifth</b>."
      }
    ]
  }
];
lessonthreeone.forEach((slide, idx) => {
  slide.lesson_id = 9;
  slide.number = idx + 1;
});

// lessonthreetwo;
// lessonthreethree;

const slides = _.flatten([lessononeone, lessononetwo, lessononethree, lessononefour, lessononefive, lessontwoone, lessontwotwo, lessontwothree, lessonthreeone]);

module.exports = slides;
