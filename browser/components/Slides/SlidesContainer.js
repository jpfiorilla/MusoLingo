import { connect } from 'react-redux';
import SlidesComponent from './SlidesComponent';
import { updateUser } from '../../redux/user';

const mapStateToProps = function (state) {
  return {
    slides: state.slides,
    user: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    // NOTE: dispatch that the user has completed this lesson when they get to the
    // replay the slides page.
    completed: (update, att, user_id) => {
      dispatch(updateUser(update, att, user_id));
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SlidesContainer = componentCreator(SlidesComponent);
export default SlidesContainer;
