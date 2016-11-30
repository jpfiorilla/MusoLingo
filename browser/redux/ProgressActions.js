import axios from 'axios'

// ----------------------     ACTIONS     ---------------------------------- //
export const SET_USER_QUIZ_PROGRESS = 'SET_USER_QUIZ_PROGRESS';
export const LOG_QUESTION_SCORE = 'LOG_QUESTION_SCORE';
export const ADD_QUIZZES_SCORES = 'ADD_QUIZZES_SCORES';

// export const logQuestionScore = (score) => {
//     return {
//         type: LOG_QUESTION_SCORE,
//         score
//     }
// }

export const addScores = (scores) => {
  return {
    type: ADD_QUIZZES_SCORES,
    scores
  }
}

export const addQuizzes = (completedQuizzes) => {
  return {
    type: SET_USER_QUIZ_PROGRESS,
    completedQuizzes
  }
}

// happens at the end of the quiz
export const saveUserScoreToServer = (userId, quizId, scores) => {
  return dispatch => {
    axios.post(`/api/users/quizzes/score/${userId}`, { quizId, scores })
    .then(res => {
      return dispatch(addScores(res.data.quizzesScore))
    })
    .catch(err => {
      console.log(err);
      console.log("Error saving quizzes scores to db")
    })
  }
}

export const saveUserProgressToServer = (userId, completedQuiz) => {
  return dispatch => {
    axios.post(`/api/users/quizzes/${userId}`, {completedQuiz})
    .then(res => {
      console.log(res)
      return dispatch(addQuizzes(res.data.completedQuizzes))
    })
    .catch(err => {
      console.error(err);
      console.log("Error adding completed quiz to db")
    })
  }
}

// --------------------         REDUCER         --------------------------
export const quizScoreReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_QUIZZES_SCORES:
      return action.scores;
    default:
      return state;
  }
}

export const completedQuizzesReducer = (state = [], action) => {
  switch (action.type){
    case SET_USER_QUIZ_PROGRESS:
    return action.completedQuizzes;
    default:
    return state
  }
}
