import axios from 'axios'

// on load we need to get all the names of the topics
// and then for each topic we need to get the lessons associated with that topic.

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const ADD_KEY = 'ADD_KEY';

// NOTE: ask the serve to get the topics from the db.

// export const addNewKeyToServer = (num) => {
//   return dispatch => {
//     axios.get('/api/topics/all')
//     .then(res => {
//       dispatch(setTopics(res.data));
//     })
//     .catch(err => {
//       console.error(err);
//       console.log('Error getting the topics from the db.');
//     });
//   }
// }

// NOTE: action creator for setting the topics.
export const setNumOfKeys = (numOfKeys) => {
  return {
    type: ADD_KEY,
    numOfKeys
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const numOfKeysReducer = (state = null, action) => {
  switch (action.type) {

    case ADD_KEY:
      return action.numOfKeys;

    default:
    return state
  }
}
