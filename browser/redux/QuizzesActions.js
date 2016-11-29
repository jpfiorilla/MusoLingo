import axios from 'axios'
import updateStorage from './Local_Storage';

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_QUIZZES = 'SET_QUIZZES';
export const CLEAR_QUIZZES = 'CLEAR_QUIZZES';
export const SET_CURRENT_QUIZ = 'SET_CURRENT_QUIZ';
const loc_stor_quiz_property = 'quiz';

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
var initQuiz = JSON.parse(localStorage.getItem(loc_stor_quiz_property));

export const quizzesReducer = (state = initQuiz || [], action) => {
  switch (action.type) {
    case SET_QUIZZES:
      updateStorage(loc_stor_quiz_property, action.quizzes);
      return action.quizzes;
    case CLEAR_QUIZZES:
    updateStorage(loc_stor_quiz_property, action.quizzes);
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
