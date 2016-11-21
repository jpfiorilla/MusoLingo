import { connect } from 'react-redux';
import SlidesComponent from './SlidesComponent';


const mapStateToProps = function (state) {
  return {
    slides: state.slides
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SlidesContainer = componentCreator(SlidesComponent);
export default SlidesContainer;
