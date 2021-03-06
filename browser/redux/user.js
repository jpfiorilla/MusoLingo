import axios from 'axios';
import { browserHistory } from 'react-router';
import updateStorage from './Local_Storage';

/* -----------------    ACTIONS     ------------------ */

const loc_stor_user_property = 'user';
const SET    = 'SET_CURRENT_USER'
const REMOVE = 'REMOVE_CURRENT_USER'

/* ------------   ACTION CREATORS     ------------------ */

const set   = user => ({ type: SET, user })
const remove  = () => ({ type: REMOVE })

/* ------------       REDUCER     ------------------ */

var initUser = JSON.parse(localStorage.getItem(loc_stor_user_property));

export default function reducer (currentUser = initUser || {}, action) {
  switch (action.type) {

    case SET:
    updateStorage(loc_stor_user_property, action.user);
    return action.user;

    case REMOVE:
    updateStorage(loc_stor_user_property, {});
    return {};

    default:
    return currentUser;
  }
}

/* ------------       DISPATCHERS     ------------------ */

//this.props.completed(this.props.user.completed, 'completed', this.props.user.id);
export const updateUser = (update, att, userId) => dispatch => {
  axios.post(`/api/users/${userId}`, {[att]: update})
  .then(res => {
    dispatch(set(res.data))
  })
  .catch(err => console.error('Error in updateUser', err));
}

export const login = (credentials, displayErr) => dispatch => {
  axios.post('/api/auth/login', credentials)
  .then(res => {
    dispatch(set(res.data));
    browserHistory.push(`/`);
  })
  .catch(err => {
    console.error('Unable to log in', err)
    console.log('Invalid credentials');
  });
}

export const signup = credentials => dispatch => {
  axios.post('/api/auth/signup', credentials)
  .then(res => {
    dispatch(set(res.data));
    browserHistory.push(`/`);
  })
  .catch(err => console.error('Unable to sign up', err));
}

export const retrieveLoggedInUser = () => dispatch => {
  axios.get('/api/auth/me')
  .then(res => {
    if (res.data) {
      dispatch(set(res.data));
    }
  })
  .catch(err => console.error('Unable to retrieve logged in user', err));
}

export const logout = () => dispatch => {
  axios.delete('/api/auth/logout')
  .then(() => {
    dispatch(remove());
  })
  .catch(err => console.error('Unable to logout', err));
}
