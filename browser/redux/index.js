import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './HomePageActions';

export default combineReducers({
    user,
    topics: topicsReducer
});
