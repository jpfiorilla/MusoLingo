import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_NOTES = 'SET_NOTES';
export const SET_BPM = 'SET_BPM';
export const SET_SCORE = 'SET_SCORE';

// export const askServerForAllLessons = () => {
//   return dispatch => {
//     axios.get('/api/lessons/all')
//     .then(res => {
//       dispatch(setLessons(res.data));
//     })
//     .catch(err => {
//       console.error(err);
//       console.log('Error getting the lessons from the db.');
//     });
//   }
// }

export const setScore = (score) => {
  return {
    type: SET_SCORE,
    score
  }
}

export const setBPM = (bpm) => {
  return {
    type: SET_BPM,
    bpm
  }
}

export const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    notes
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const scoreCounterReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    default:
      return state
  }
}

export const bpmReducer = (state = 120, action) => {
  switch (action.type) {
    case SET_BPM:
      return action.bpm;
    default:
      return state
  }
}

export const notesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_NOTES:
      return action.notes;
    default:
      return state
  }
}
