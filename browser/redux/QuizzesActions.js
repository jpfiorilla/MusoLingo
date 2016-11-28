import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_QUIZZES = 'SET_QUIZZES';
export const CLEAR_QUIZZES = 'CLEAR_QUIZZES';

export const askServerForQuizzes = (lesson_id) => {
  return dispatch => {
    axios.get(`/api/quiz/lesson_id/${lesson_id}`)
    .then(res => {
      dispatch(setQuizzes(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the quizzes from the db.');
    });
  }
}

export const clearQuizzesBeforeRender = () => {
  return dispatch => {
    dispatch(clearQuizzes());
  }
}

// NOTE: action creator for setting the topics.
export const setQuizzes = (quizzes) => {
  return {
    type: SET_QUIZZES,
    quizzes
  }
}

export const clearQuizzes = () => {
  return {
    type: CLEAR_QUIZZES,
    quizzes: []
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const quizzesReducer = (state = [], action) => {
  switch (action.type) {
    case SET_QUIZZES:
      return action.quizzes;
    case CLEAR_QUIZZES:
      return action.quizzes;
    default:
      return state
  }
}
