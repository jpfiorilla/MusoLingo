import { combineReducers } from 'redux';
import user from "./user";
import { topicsReducer } from './TopicsActions';
import { lessonsReducer } from './LessonsActions';
import { slidesReducer } from './SlidesActions';
import { challengesReducer, scoreReducer} from './ChallengeActions';
import { metronomeReducer } from './MetronomeActions';
import { quizzesReducer, currentQuizReducer } from './QuizzesActions'

export default combineReducers({
    user,
    topics: topicsReducer,
    lessons: lessonsReducer,
    slides: slidesReducer,
    challenges: challengesReducer,
    score: scoreReducer,
    quizzes: quizzesReducer,
    rhythm: metronomeReducer
});
