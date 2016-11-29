import axios from 'axios'

// ----------------------     ACTIONS     ---------------------------------- //
export const SET_USER_QUIZ_PROGRESS = 'SET_USER_QUIZ_PROGRESS';

export const addQuizzes = (completedQuizzes) => {
    return {
        type: SET_USER_QUIZ_PROGRESS,
        completedQuizzes
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
export const completedQuizzesReducer = (state = [], action) => {
    switch (action.type){
        case SET_USER_QUIZ_PROGRESS:
            return action.completedQuizzes;
        default:
            return state
    }
}