import axios from 'axios';
// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

export const SET_MEASURE = 'SET_MEASURE';
export const SET_BEAT = 'SET_BEAT';

export const setMeasure = (measure) => {
  return {
    type: SET_MEASURE,
    measure
  }
}

export const setBeat = (beat) => {
  return {
    type: SET_BEAT,
    beat
  }
}

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------


export const metronomeReducer = (state = {measure: 0, beat: 0}, action) => {
  switch (action.type) {
    case SET_MEASURE:
      return Object.assign({}, state, {measure: action.measure})
    case SET_BEAT:
      return Object.assign({}, state, {beat: action.beat})
    default:
      return state
  }
}
