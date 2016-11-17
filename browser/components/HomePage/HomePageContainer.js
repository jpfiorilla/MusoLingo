import { connect } from 'react-redux';
import HomePageComponent from './HomePageComponent';


const mapStateToProps = function (state) {
  return {
    topics: state.topics
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomePageContainer = componentCreator(HomePageComponent);
export default HomePageContainer;
