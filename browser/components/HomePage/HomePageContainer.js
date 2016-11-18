import { connect } from 'react-redux';
import HomePageComponent from './HomePageComponent';
import { askServerForTheSlides } from '../../redux/SlidesActions';

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
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomePageContainer = componentCreator(HomePageComponent);
export default HomePageContainer;
