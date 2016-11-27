import axios from 'axios';
// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

export const SET_CHALLENGES = 'SET_CHALLENGES';
export const SET_SCORE = 'SET_SCORE';
export const SET_VEXNOTES = 'SET_VEXNOTES';
export const SET_NOTES = 'SET_NOTES';

export const setNotes = (notes) => {
  return {
    type: SET_NOTES,
    notes
  }
}

export const setVexNotes = (vexNotes) => {
  return {
    type: SET_VEXNOTES,
    vexNotes
  }
}
export const setScore = (score) => {
  return {
    type: SET_SCORE,
    score
  }
}

// action.type = SET_CHALLENGES, action.challenges=challenges
export const setChallenges = (challenges) => {
  return {
    type: SET_CHALLENGES,
    challenges
  }
}

export const askServerForChallenge = (challenge_id) => {
  return dispatch => {
    axios.get(`/api/challenges/${challenge_id}`)
    .then(res => {
      dispatch(setChallenges(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the challenge from the db.');
    });
  }
}

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------
export const vexNotesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_VEXNOTES:
      return action.vexNotes;
    default:
      return state
  }
}

export const scoreReducer = (state = null, action) => {
  switch (action.type) {
    case SET_SCORE:
      return action.score;
    default:
      return state
  }
}
export const challengesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_CHALLENGES:
      return action.challenges;
    case SET_NOTES:
      return Object.assign({}, state, {vexNotes: action.notes})
    default:
      return state
  }
}
