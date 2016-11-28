import { connect } from 'react-redux';

import NavigationPage from './NavigationPage';
import { askServerForTheSlides, clearSlidesBeforeRender } from '../../redux/SlidesActions';
import { askServerForQuizzes, clearQuizzesBeforeRender, setCurrentQuizForProgress } from '../../redux/QuizzesActions';


const mapStateToProps = function (state) {
  return {
    topics: state.topics,
    lessons: state.lessons,
    completedQuizzes: state.completedQuizzes,
    user: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  // NOTE: need to give a function to load the slides for the lesson id on click.
  return {
    askForSlides: (lesson_id) => {
      dispatch(askServerForTheSlides(lesson_id));
    },
    askForQuiz: (lesson_id) => {
      dispatch(askServerForQuizzes(lesson_id));
    },
    clearSlides: () => {
      dispatch(clearSlidesBeforeRender());
    },
    clearQuizzes: () => {
      dispatch(clearQuizzesBeforeRender());
    },
    setCurrentQuiz: (lesson_id) => {
      dispatch(setCurrentQuizForProgress(lesson_id))
    }
  };
};

const NavigationPageContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationPage);
export default NavigationPageContainer;
