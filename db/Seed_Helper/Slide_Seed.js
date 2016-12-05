var _ = require('lodash');

var lessononeone = [{
  "title": "Basic rhythmic notation",
  "slideContent": [
    {
      "text": "Welcome to <b>88 Keys</b>!"
    },
    {
      'text': "The first thing we'll cover is rhythm."
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "Music moves in time. We use <b>rhythm</b> to organize the flow of time into patterns of notes differing in duration."
    },
    // { // include some relevant picture
    //   img: "http://i.imgur.com/PvRcW43.png",
    //   style: {
    //     height: "75px"
    //   }
    // },
    {
      "text": "Rhythmic notation is used to specify each note's <b>duration</b>: how long that note is supposed to be played for."
    }

  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "A piece of sheet music is made up of <b>measures</b>."
    },
    {
      text: "Vertical black bars called <b>bar lines</b> divide the staff into measures."
    },
    {
      img: "/images/lessons_pictures/measure-1.png",
      style: {
        width: "70%"
      }
    },
    {
      text: "This staff has been split up into two measures."
    },
    {
      img: "/images/lessons_pictures/measure-2.png",
      style: {width: "68%"}
    },
    {
      text: "Each measure holds a certain number of <b>beats</b>. A <b>beat</b> is the basic unit of duration."
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "The number of beats held by each measure is determined by its time signature, which we'll learn about a little later. For now, let's assume that all measures contain <b>4 beats</b>."
    },
    {
      img: "/images/lessons_pictures/measure-3.png",
      style: {width: "70%"}
    },
    {
      text: "The first measure is in 4/4 time, while the second measure is in 3/4 time."
    },
    {
      img: "/images/lessons_pictures/measure-4.png",
      style: {width: "70%"}
    },
    {
      text: "The first measure (4/4) contains four quarter notes"
    },
    {
      img: "/images/lessons_pictures/measure-5.png",
      style: {width: "70%"}
    },
    {
      text: "While the second measure (3/4) contains three quarter notes."
    },
    {
      text: "Different rhythmic notes are meant to be played for a different number of beats. Let's learn what the basic rhythmic notes are!"
    }
  ]
}, {
  "title": "Whole notes",
  "slideContent": [
    {
      'text': 'This is a <b>whole note</b>. It indicates that a note is to be held for <b>four (4) beats</b>.'
    },
    {
      img: "http://i.imgur.com/69AJB7X.png",
      tone: {
        duration: "1n"
      },
      style: {
        height: "75px"
      }
    },
    {
      text: "Remember, we said that every measure contains 4 beats (for now). So how many whole notes can fit in one measure?"
    }
    // question: user must answer 1 in order to continue
  ]
}, {
  "title": "Half & quarter notes",
  "slideContent": [
    {
      text: "This is a <b>half note</b>. It's worth half the duration of a whole note, or <b>two (2) beats.</b>"
    },
    {
      img: "http://i.imgur.com/w2N9QO3.png",
      tone: {
        duration: "2n"
      },
      style: {
        height: "75px"
      }
    },
    // {
    //   vex: {
    //     type: 'SingleRhythmNote',
    //     num: '1',
    //     info: ['h']
    //   }
    // },
    {
      text: "<b>Quarter notes</b> are the next smallest type of note. Each quarter note is worth <b>one (1) beat</b>."
    }, // question: if there is already one half note in a measure, how many quarter notes will fit? answer: 2
    {
      img: "http://i.imgur.com/Wq8bHjw.png",
      tone: {
        duration: "4n"
      },
      style: {
        height: "75px"
      }
    },
    // {
    //   vex: {
    //     type: 'SingleRhythmNote',
    //     num: '2',
    //     info: ['q']
    //   }
    // }
  ]
}, {
  "title": "Eighth notes",
  "slideContent": [
    {
      text: "This is an <b>eighth note</b>. It's worth half of a quarter note, i.e. <b>half of a beat (1/2)</b>."
    },
    {
      img: "http://i.imgur.com/iv4GeCq.png",
      tone: {
        duration: "8n"
      },
      style: {
        height: "75px"
      }
    },
    {
      "text": "When two or four eighth notes are written in sequence, they are attached together with a <b>stem</b>."
    },
    {
      img: "http://i.imgur.com/HdYQtYg.png",
      style: {
        height: "110px"
      }
    },
    {
      "text": "Stems don't change the duration of the notes - they're simply used to make sheet music cleaner and more readable."
    },
  ]
}, {
  "title": "Sixteenth notes",
  "slideContent": [
    {
      text: "This is a <b>sixteenth note</b>. It's worth half an eighth note, or <b>one quarter of a beat (1/4)</b>."
    },
    {
      img: "http://i.imgur.com/PvRcW43.png",
      tone: {
        duration: "16n"
      },
      style: {
        height: "75px"
      }
    },
    {
      "text": "Like eighth notes, when two or four sixteenth notes are written in sequence, they are attached together with a stem."
    },
    {
      img: "http://i.imgur.com/e3lyfNN.png",
      style: {
        height: "110px"
      }
    }
    // question: if there's already one quarter note and two eighth notes in a measure, how many sixteenth notes can we fit in that same measure? answer: 4
  ]
}, {
  "title": "Rests",
  "slideContent": [
    {
      text: "Music is as much about silence as it is about sound. Silence is represented in music through rests."
    },
    {
      text: "Like notes, rests also change visually depending on their duration."
    },
    {
      img: "/images/lessons_pictures/allrests.png"
    },
    {
      text: "From the left, these are the whole rest, half rest, quarter rest, eighth rest, and sixteenth rest."
    }
  ]
}, {
  "slideContent": [
    {
      text: "Rests take up as many beats as their corresponding note. So how many beats does a half rest take up?"
    }, // REQUIRE ANSWER
    {
      img: "/images/lessons_pictures/allrests.png"
    },
    {
      text: "How about a quarter rest?"
    } // REQUIRE ANSWER
  ]
}, {
  "title": "Note Chart",
  "slideContent": [
    {
      text: "This chart displays the relationship of five note types discussed in this lesson."
    },
    {
      img: "/images/lessons_pictures/notes-graph.png",
      style: {width: "70%"}
    },
    {
      text: "Try listening to the differences!"
    },
    { // whole note:
      img: "http://i.imgur.com/69AJB7X.png",
      tone: {
        duration: "1n"
      },
      style: {
        height: "75px"
      },
      div: {
        style: {display: "inline-block"}
      }
    },
    { // half note:
      img: "http://i.imgur.com/w2N9QO3.png",
      tone: {
        duration: "2n"
      },
      style: {
        height: "75px"
      },
      div: {
        style: {display: "inline-block"}
      }
    },
    { // quarter note:
      img: "http://i.imgur.com/Wq8bHjw.png",
      tone: {
        duration: "4n"
      },
      style: {
        height: "75px"
      },
      div: {
        style: {display: "inline-block"}
      }
    },
    {
      img: "http://i.imgur.com/iv4GeCq.png",
      tone: {
        duration: "8n"
      },
      style: {
        height: "75px"
      },
      div: {
        style: {display: "inline-block"}
      }
    },
    {
      img: "http://i.imgur.com/PvRcW43.png",
      tone: {
        duration: "16n"
      },
      style: {
        height: "75px"
      },
      div: {
        style: {display: "inline-block"}
      }
    }]
    },
    {
      "title": "",
      "slideContent": [
        {
          text: "With just the five rhythmic notes and rests that we learned, there are tons of different ways to fill up measures of 4 beats."
        },
        {
          img: "/images/lessons_pictures/challenge1screenshot.png",
          // different examples of full 4/4 measures
          style: 
            {width: "97%"}
        },
        {
          img: "/images/lessons_pictures/challenge1screenshot.png",
          style: {width: "97%"}
        },
        {
          text: "Good job making it through the lecture. Once you're ready, take the quiz, which will test your ability to identify the different rhythmic notes."
        }
      ]
    }
];

lessononeone.forEach((slide, idx) => {
  slide.lesson_id = 1;
  slide.number = idx + 1;
});

lessononetwo = [{
  "title": '',
  "slideContent": [
    {
      text: "In the last lesson, we learned that written music is made up of <b>measures</b>, which consist of <b>beats</b>."
    },
    {
      text: "But how long is one beat? Surely it can't be the same for all songs, since some songs are faster or slower than others."
    }
  ]
}, {
  "title": '',
  "slideContent": [
    {
      text: "Beat is the duration we assign to our rhythm definitions. This can be a fraction of a second, a second, a few seconds, or several seconds. Putting several beats together gives us a steady series of units which make up rhythm."
    },
    {
      img: "/images/lessons_pictures/four-beat-rhythm.gif"
    },
    {
      text: "See this example of a 4 beat rhythm. The notes in each of the two measures add up to 4 beats, but the actual length of one beat is unclear."
    }
  ]
}, {
  "title": 'Tempo',
  "slideContent": [
    {
      text: "The duration of a beat is determined by the song's <b>tempo</b>, which is represented by a number denoting the piece's bpm (beats per minute)."
      },
    {
      img: "/images/lessons_pictures/bpm_staff.png"
    },
    {
      text: "The tempo of a piece is usually denoted at the top of the page. If it changes mid-song, the change will be denoted above the relevant measure."
    }
  ]
}, {
  "title": '',
  "slideContent": [
    {
      text: "A tempo of 60 bpm means that each beat lasts for <b>one second</b>."
    },
    {
      text: "The following sound sample will play a measure of 4 quarter notes at 60 bpm. Since a quarter note lasts for one beat, each quarter note will last for one second"
    }, // sound sample
    {
      text: "By the way, the sound samples you heard in the last lesson were played at 90 bpm."
    }
  ]
}, {
  "title": '',
  "slideContent": [
    {
      text: "60 bpm is considered a very <b>slow</b> tempo. Let's hear 4 quarter notes played at double that speed: 120 bpm."
    }, // sound sample
    {
      text: "No matter what the tempo is, each quarter note will <b>always</b> last for one beat. So even if we speed up the tempo, 4 quarter notes will always fit in a measure of 4 beats."
    },
    {
      text: "Now let's hear a measure full of eighth notes played at that tempo. How many eighth notes were played?"
    }, // sound sample
  ] // question: answer: 8
}, {
  "title": 'Keeping Time',
  "slideContent": [
    {
      text: "Thankfully, nobody expects musicians to memorize how long a beat leasts for each tempo - that would be insane!"
    },
    {
      img: '/images/lessons_pictures/metronome.jpg'
    },
    {
      text: "Instead, we can get the length of each beat from a <b>metronome</b>, which takes a bpm and plays a repetitive 'click' sound once for each beat."
    },
    {
      img: "Compare the following samples. The first is a metronome playing 8 clicks at 72 bpm, the second is at 96 bpm, and the last is at 144 bpm."
    } // sound sample of metronome playing 4 beats; make sure you tell them what bpm it's at
  ]
}, {
  "title": '',
  "slideContent": [
    {
      text: "In an orchestra, the conductor keeps the musicians in time by waving his baton to the speed of each beat."
    },
    {
      img: '/images/lessons_pictures/baton.jpg'
    },
    {
      text: "Of course, in most performance situations, you won't have a metronome or conductor to give you the pulse. In a smaller band, it's up to the musicians to stay in sync with each other. In a solo performance, the musician has to be able to stick to a consistent beat."
    },
    {
      text: "This is why it's vital for musicians to not only understand how rhythm works, but to be able to <b>feel</b> the beat."
    }
  ]
}
]
lessononetwo.forEach((slide, idx) => {
  slide.lesson_id = 2;
  slide.number = idx + 1;
});

lessononethree = [
  {
    "title": '',
    "slideContent": [
      {
        text: "So far we've learned how to read some rhythmic notes. But we're still not ready to play a piece of sheet music for the piano."
      },
      {
        text: "Rhythmic notes tell us how long each note lasts for. But they don't tell us which key on the piano we're supposed to play."
      }
    ]
}, {
  "title": 'Pitch',
  "slideContent": [
    {
      text: "Each key on the piano produces a note of a different <b>pitch</b>."
    },
    {
      text: "Sounds are essentially just vibrations in the air. Pitch describes the <b>frequency</b> at which a sound wave vibrates."
    },
    { // some picture relating to sound wave or vibration
      img: ""
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "The pitch of a note is described by a letter name. In Western music, there are <b>12</b> different note names used to denote pitch."
    },
    {
      img:"/images/lessons_pictures/piano_notes_staff.jpg"
    },
    {
      text: "For example, if we play the first white key from the left on our on-screen keyboard, it will produce a C. Try it yourself!"
    },
    {
      pianoUserInput: {
        notesToPlay: ["C3"]
      }
    } // REQUIRE user to input C3 before they can move on
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "The second white key from the left will produce a D, the third one will produce an E, and so on. Once we get to G, the letter names restart again with A."
    },
    {
      img: "/images/lessons_pictures/piano_notes_staff.jpg"
    },
    {
      text: "As we move towards the right on the keyboard, we are <b>ascending</b>, and the pitches get <b>higher</b>. If we move towards the left, we are <b>descending</b>, and they become <b>lower</b>."
    },
    {
      text: "Pop quiz: play the highest note on the on screen keyboard!"
    } // REQUIRE user to input B4 (\ key)
  ]
}, {
  "title": "Notes on the staff",
  "slideContent": [
    {
      text: "Notes are read on a <b>staff</b>. A staff is a set of five lines on which all sheet music is written."
    }, {
      img: '/images/lessons_pictures/treble-clef-notes.png' // image of staff with note names
    },
    {
      text: "The vertical placement of a note on the staff tells us which pitch that note corresponds to."
    }
  ]
}, {
  "title": "Treble clef",
  "slideContent": [
    {
      text: "The symbol on the left of the staff is the treble clef. This indicates that the notes on the spaces in between the lines of this staff are F A C E."
    }, {
      img: '/images/lessons_pictures/treble-clef-space-notes.png' // image of staff with F A C E denoted
    }, {
      img: "/images/lessons_pictures/f3 c3.png" // image of an F and a C
    }, {
      text: "In the image above, the first half note is an F. The second one is a C."
    }, {
      img: "/images/lessons_pictures/e3.png" // image of an E
    }, // question: Can you play this note? answer: E3 OR E4
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "Notes can also be placed directly <b>on</b> the staff lines. Ascending from the bottom line, the notes would be E G B D F."
    }, {
      img: '/images/lessons_pictures/treble-clef-line-notes.png' // image of staff with line notes displayed
    },
    {
      text: "An easy way to remember this is through the pnuemonic <b>E</b>very <b>G</b>ood <b>B</b>oy <b>D</b>oes <b>F</b>ine."
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "As you might have noticed, the names of notes wrap around from A to G. This means there are multiple notes of each letter name."
    }, {
      img: "/images/lessons_pictures/piano_notes_staff.jpg" // re-use image of notes mapped out on keyboard
    }, {
      text: "In the image below, both of the notes are 'C.' The lower one is 'middle C,' also known as C4. This is the C nearest the middle of the piano."
    }, {
      img: "/images/lessons_pictures/c3 c4.png"
    }, {
      text: "We'll learn more about repeating note names in our lesson on octaves and half-steps."
    }
  ]
}]
lessononethree.forEach((slide, idx) => {
  slide.lesson_id = 3;
  slide.number = idx + 1;
});

lessononefour = [
  {
    "title": "Accidentals", // SPLIT INTO ITS OWN LESSON
    "slideContent": [
      {
        text: "You probably been wondering what the black keys are for. Remember when we learned that there are 12 notes? 7 of them are played by the white keys, and other 5 are played by the black keys."
      }, {
        text: "The black keys play notes with symbols in their letter names, known as <b>accidentals</b>."
      }, {
        img: "/images/lessons_pictures/blackkeys.png" // picture of black keys with note names
      }, {
        text: "There are two types of accidentals, sharps (#) and flats (b)."
      }
    ]
  }, {
  "title": "Black Keys",
  "slideContent": [
    {
      text: "Remember that as we move to the left, we ascend pitches, and the notes get higher."
    }, {
      text: "The second black key from the left plays the note that, in terms of pitch, lies <b>in between</b> D and E, its surrounding white keys."
    }, {
      img: "/images/lessons_pictures/dsharpeb.png"
    }, {
      text: "Try playing it, and compare the way it sounds to its surrounding notes!"
    },  // require user to input D#3 on keyboard
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "What do we call this note? It actually has two names: D-sharp(D#) and E-flat(Eb)."
    },
    {
      text: "A <b>half-step</b> describes the space between two consecutive notes. A sharp raises the affected note by a half-step, while a flat lowers the note by a half-step."
    }, {
      img: "/images/lessons_pictures/dsharpebstaff.png" // image of D# and Eb on staff
    }, {
      text: "So this note can be thought of as either a raised D <b>or</b> a lowered E. Whether we call it D# or Eb, the note has the same pitch."
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      img: "/images/lessons_pictures/asharpbb.png" //picture of a A#/Bb
    },
    {
      text: "What is this note called? If you've been paying attention, you'll know that there are two possible right answers!"
    } // question: REQUIRE answer: A# OR Bb
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "When a note is written with an accidental, that accidental applies to each subsequent note on that line for the rest of the measure."
    }, {
      img: "images/lessons_pictures/bnatural.png" // image of B, Bb, Bb, B
    }, {
      text: "The 'natural' symbol displayed here cancels that effect. Thus the notes in this measure are: B, Bb, Bb, B."
    }
  ]
}];
lessononefour.forEach((slide, idx) => {
  slide.lesson_id = 4;
  slide.number = idx + 1;
});

lessononefive = [
  {
    "title": "",
    "slideContent": [
      {
        text: "Remember back in the first lesson, when we told you to assume that every measure holds 4 beats?"
      },
      {
        img: "/images/lessons_pictures/measure-4.png",
        style: {width: "50%"}
      },
      {
        text: "FORGET THAT EVER HAPPENED. That isn't <b>always</b> true, we just simplified things to make the concepts of note duration and tempo easier to understand."
      }
    ]
  },
  {
  "title": "Time signatures",
  "slideContent": [
    {
      text: "Written music is usually prefaced by a figure composed of two numbers, one stacked atop the other."
    }, {
      img: "/images/lessons_pictures/measure-4.png",
      style: {width: "50%"}
    }, {
      text: "This is known as a <b>time signature</b>, and it indicates the number of beats in that measure and all proceeding measures."
    }
  ]
}, {
  "title": "",
  "slideContent": [{
      text: "The top number indicates how many beats make up one measure. When the time signature is 4/4 (pronounced 'four-four'), there are 4 beats per measure, while in 3/4, there are 3 beats per measure"
    }, {
      img: "/images/lessons_pictures/measure-4.png",
      style: {width: "50%"}
    }, {
      text: "The bottom number indicates which note is considered one <b>beat</b> when counting a measure."
    }, {
      text: "A 4 indicates that a quarter note is comprises one beat. An 8 indicates that an eighth note takes up one beat. And so on."
    }
  ]
}, {
  "title": "",
  "slideContent": [{
      text: "Thus, in 4/4, there are 4 beats, and a quarter note is equivalent to one beat. So we can fit up to 4 quarter notes per measure."
    }, {
      img: "/images/lessons_pictures/measure-4.png",
      style: {width: "70%"}
    }, {
      userTextInput: {
        correctAnswer: "8",
        question: "How many eighth notes could fit in one 4/4 measure?",
        correctAnswerMessage: "Good job!",
        incorrectAnswerMessage: "Try again!"
      }
    }
  ]
}, {
  "title": "",
  "slideContent": [
    {
      text: "In a 3/2 time signature, there are 3 beats, and a half note comprises one beat. So we could fit 3 half notes, 6 quarter notes, 12 eighth notes, 24 sixteenth notes, or some combination of them in one measure."
    },
    {
      img: "/images/lessons_pictures/timesigsin3.png"
    },
    {
      text: "In 3/8, there are 3 beats per measure, and an eighth note comprises one beat. How many sixteenth notes would fit in one measure of 3/8?"
    } // REQUIRE ANSWER: 6
  ]
}, {
  "title": "Common Time",
  "slideContent": [
    {
      text: "A 4/4 time signature is the most common time signature in western music."
    }, {
      img: "/images/lessons_pictures/commontime.jpg"
    }, {
      text: "Because of this, it is sometimes written simply as a large C, denoting <b>common time</b>."
    }
  ]
}, {
  "title": "Other time signatures",
  "slideContent": [
    {
      text: "Other common time signatures include 2/4 ('oom-pah'), 3/4 (as in a waltz), and 6/8 (a hybrid of 2/4 and 3/4)."
    }, {
      img: '/images/lessons_pictures/timesigs.jpg'
    }, {
      text: "Each implies a different rhythmic feel. As you play music in each of these, you'll naturally develop an understanding of how they sound."
    }
  ]
}
];
lessononefive.forEach((slide, idx) => {
  slide.lesson_id = 5;
  slide.number = idx + 1;
});

lessononesix = [{
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
lessononesix.forEach((slide, idx) => {
  slide.lesson_id = 6;
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
        left: "-9%",
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
        left: "-3%",
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
        left: "-2.5%"
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
  slide.lesson_id = 7;
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
        text: "Let's start with C3 and D3. In terms of distance, the interval between these two notes will always be a <b>second</b>, regardless of any accidentals in either note."
      }, {
        img: "/images/lessons_pictures/c3 d3.png"
      }, {
        text: "This goes for all note names with the same relationship; for example, D3 and E3 also form a second."
      }, {
        img: '/images/lessons_pictures/d3 e3.png'
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
    "slideContent": [{
        text: "Intervals can also be counted downward. For example, G3 can be described as being a fourth <b>below</b> C4. If we were to count upward however, they would form a fifth."
      }, {
        img: "/images/lessons_pictures/c5 g4.png"
      }, {
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
  slide.lesson_id = 8;
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
  slide.lesson_id = 9;
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
  slide.lesson_id = 10;
  slide.number = idx + 1;
});

lessonthreefour = [
  {
  "title": "Root position",
  "slideContent": [
    {
      text: "So far we've learned how to build triads in what is known as <b>root position</b>. A triad is in root position when its tonic is written as its lowest note, in the bass."
    }, {
      img: '/images/lessons_pictures/c root positions.png'
    }, {
      text: 'These two chords are both in root position. The mediant E is raised by an octave in the second example, but the lowest note remains the C.'
    }
  ]}, {
    "title": "Inversions",
    "slideContent": [{
      text: "How else might a C triad be arranged? There are two other options for the bass note: the mediant (E) and the dominant (G)."
    }, {
      img: '/images/lessons_pictures/c6 and c64.png'
    }, {
      text: 'The triads written here are known as <b>inversions</b>.'
    }
  ]}, {
    "title": "6 & 6/4",
    "slideContent": [{
      text: "In the first chord, the mediant (E) is written in the bass; this is known as a C triad in <b>first inversion</b>, or a C 6."
    }, {
      img: '/images/lessons_pictures/c6 and c64.png'
    }, {
      text: 'The second chord features the dominant (G) in the bass; this is known as <b>second inversion</b>, or a C 6/4.'
    }
  ]},{
    "title": "Inversion names & intervals",
    "slideContent": [{
      text: "In root position, a traid is composed of an interval of a third and an interval of a fifth from the bass note. The reason the first-inversion chord is called 'C 6' is that the intervals from the bass note are now a third (E to G) and a sixth (E to C)."
    }, {
      img: '/images/lessons_pictures/c6 and c64.png'
    }, {
      text: "Similarly, the second-inversion chord is called '6/4' because the intervals from the bass are now a sixth (G to E) and a fourth (G to C)."
    }
  ]}, {
    "title": "Why invert?",
    "slideContent": [{
      text: "There are many reasons one might choose to write a chord in an inversion rather than in root position when writing a piece."
    }, {
      img: '/images/lessons_pictures/c64 g c.png'
    }, {
      text: 'One frequent reason is to preserve common tones between chords in their respective voices. See here: the progression is <b>C 6/4, G, C</b>. By writing the first C chord in second inversion, the bass is able to stay on the same note for both chords.'
    }
  ]
}, {
    "title": "Why invert? (2)",
    "slideContent": [{
      text: "Another reason might be to create a specific melody out of the bass line."
    }, {
      img: '/images/lessons_pictures/am dm f g c.png'
    }, {
      text: "This example features a simple functional progression; <b>Am, Dm, F, G, C</b>. Since these chords contain the notes 'E, D, C, B, C', we can arrange the progression and inversions such that those notes comprise the bass line."
    }
  ]
}];
lessonthreefour.forEach((slide, idx) => {
  slide.lesson_id = 13;
  slide.number = idx + 1;
});

// lessonthreetwo;
// lessonthreethree;

const slides = _.flatten([lessononeone, lessononetwo, lessononethree, lessononefour, lessononefive, lessononesix, lessontwoone, lessontwotwo, lessontwothree, lessonthreeone, lessonthreefour]);

module.exports = slides;
