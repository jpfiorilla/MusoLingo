import { connect } from 'react-redux';
import Challenge from './Challenge';
import { updateUser } from '../../redux/user';

const mapStateToProps = function (state) {
  return {
    user: state.user,
    challenges: state.challenges,
    score: state.score,
    vexNotes: state.vexNotes
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    updateUser: (update, attr, userId) => {
      dispatch(updateUser(update, attr, userId));
    }
  };
};

 export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
