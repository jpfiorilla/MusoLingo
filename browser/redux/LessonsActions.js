import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_LESSONS = 'SET_LESSONS';

// NOTE: ask the serve to get the topics from the db.
export const askServerForAllLessons = () => {
  return dispatch => {
    axios.get('/api/lessons/all')
    .then(res => {
      dispatch(setLessons(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the lessons from the db.');
    });
  }
}

// NOTE: action creator for setting the topics.
export const setLessons = (lessons) => {
  return {
    type: SET_LESSONS,
    lessons
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const lessonsReducer = (state = [], action) => {
  switch (action.type) {

    case SET_LESSONS:
      return action.lessons;

    default:
    return state
  }
}
