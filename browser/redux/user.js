import axios from 'axios';
import { browserHistory } from 'react-router';
import {addNewKeyToServer} from "./UserKeyActions"

/* -----------------    ACTIONS     ------------------ */

const SET    = 'SET_CURRENT_USER'
const REMOVE = 'REMOVE_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const set   = user => ({ type: SET, user })
const remove  = () => ({ type: REMOVE })

/* ------------       REDUCER     ------------------ */

export default function reducer (currentUser = {}, action) {
  switch (action.type) {

    case SET:
      return action.user;

    case REMOVE:
      return {};

    default:
      return currentUser;
  }
}

/* ------------       DISPATCHERS     ------------------ */

export const login = (credentials, displayErr) => dispatch => {
  axios.post('/api/auth/login', credentials)
    .then(res => {
      dispatch(set(res.data));
      dispatch(addNewKeyToServer(res.data.id, 0))
      browserHistory.push(`/`);
    })
    .catch(err => {
      console.error('Unable to log in', err)
      displayErr('Invalid credentials');
    });
}

export const signup = credentials => dispatch => {
  axios.post('/api/auth/signup', credentials)
    .then(res => {
      browserHistory.push(`/`);
      dispatch(set(res.data));
    })
    .catch(err => console.error('Unable to sign up', err));
}

export const retrieveLoggedInUser = () => dispatch => {
  axios.get('/api/auth/me')
    .then(res => {
      if (res.data)
        dispatch(addNewKeyToServer(res.data.id, 0))
        dispatch(set(res.data))
    })
    .catch(err => console.error('Unable to retrieve logged in user', err));
}

export const logout = () => dispatch => {
  axios.delete('/api/auth/logout')
    .then(() => {
      dispatch(remove());
      browserHistory.push(`/`);
    })
    .catch(err => console.error('Unable to logout', err));
}
