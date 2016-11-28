import axios from 'axios'

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_QUIZZES = 'SET_QUIZZES';
export const CLEAR_QUIZZES = 'CLEAR_QUIZZES';
export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ';

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

export const setCurrentQuizForProgress = (lessonId) => {
  return dispatch => {
    dispatch(setCurrentQuiz(lessonId));
  }
}

export const clearQuizzesBeforeRender = () => {
  return dispatch => {
    dispatch(clearQuizzes());
  }
}

// NOTE: action creator for setting the topics.
export const setCurrentQuiz = (lessonId) => {
  return {
    type: SET_CURRENT_QUIZ,
    currentQuiz: lessonId
  }
}

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

export const currentQuizReducer = (state = '', action) => {
  switch (action.type){
    case SET_CURRENT_QUIZ:
      return action.currentQuiz;
    default:
      return state;
  }
}