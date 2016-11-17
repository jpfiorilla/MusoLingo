import axios from 'axios'

// on load we need to get all the names of the topics
// and then for each topic we need to get the lessons associated with that topic.

// ----------------------     ACTIONS     ----------------------------------

// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^
export const SET_TOPICS = 'SET_TOPICS';

// NOTE: ask the serve to get the topics from the db.
export const askServerForAllTopics = () => {
  return dispatch => {
    axios.get('/api/topics/all')
    .then(res => {
      dispatch(setTopics(res.data));
    })
    .catch(err => {
      console.error(err);
      console.log('Error getting the topics from the db.');
    });
  }
}

// NOTE: action creator for setting the topics.
export const setTopics = (topics) => {
  return {
    type: SET_TOPICS,
    topics
  }
}
// %^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^%^

// --------------------         REDUCER         --------------------------

export const topicsReducer = (state = [], action) => {
  switch (action.type) {

    case SET_TOPICS:
      return action.topics;

    default:
    return state
  }
}
