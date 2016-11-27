import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './TopicsActions';
import { lessonsReducer } from './LessonsActions';
import { slidesReducer } from './SlidesActions';
import { challengesReducer } from './ChallengeActions';
import { numOfKeysReducer } from './UserKeyActions'
import {quizzesReducer} from './QuizzesActions'

export default combineReducers({
    user,
    topics: topicsReducer,
    lessons: lessonsReducer,
    slides: slidesReducer,
    challenges: challengesReducer,
    keys: numOfKeysReducer,
    quizzes: quizzesReducer
});
