import axios from 'axios'

// on load we need to get all the names of the topics
// and then for each topic we need to get the lessons associated with that topic.

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
const ADD_KEY = 'ADD_KEY';
const SET_KEYS = 'SET_KEYS'

// NOTE: ask the serve to get the topics from the db.


export const setKeys = (keys) => {
  return {
    type: SET_KEYS,
    keys
  }
}

export const addKeys = (keys) => {
  return {
    type: ADD_KEY,
    keys
  }
}

export const addNewKeyToServer = (userId, keysToAdd) => {
  return dispatch => {
    axios.post(`/api/users/keys/${userId}`, {keysToAdd})
    .then(res => {
      return dispatch(addKeys(res.data.completed.keys))
    })
    .catch(err => {
      console.error(err);
      console.log('Error adding keys to db');
    });
  }
}

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const numOfKeysReducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_KEY:
      return action.keys;
    case SET_KEYS:
      return action.keys;
    default:
      return state
  }
}
