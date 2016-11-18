import { connect } from 'react-redux';
import NavigationPage from './NavigationPage';


const mapStateToProps = function (state) {
  return {
    topics: state.topics,
    lessons: state.lessons
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

const NavigationPageContainer = connect(mapStateToProps, mapDispatchToProps);
export default NavigationPageContainer;