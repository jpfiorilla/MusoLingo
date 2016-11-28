import { connect } from 'react-redux';

import NavigationPage from './NavigationPage';
import { askServerForTheSlides, clearSlidesBeforeRender } from '../../redux/SlidesActions';
import { askServerForQuizzes, clearQuizzesBeforeRender } from '../../redux/QuizzesActions';


const mapStateToProps = function (state) {
  return {
    topics: state.topics,
    lessons: state.lessons
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
    }
  };
};

const NavigationPageContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationPage);
export default NavigationPageContainer;
