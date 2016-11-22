import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './TopicsActions';
import { lessonsReducer } from './LessonsActions';
import { slidesReducer } from './SlidesActions';
import { scoreCounterReducer, bpmReducer, notesReducer } from './ChallengeActions';

export default combineReducers({
    user,
    topics: topicsReducer,
    lessons: lessonsReducer,
    slides: slidesReducer,
    score: scoreCounterReducer,
    bpm: bpmReducer,
    notes: notesReducer
});
