import { connect } from 'react-redux';
import UserPage from './UserPage';
import { updateUser } from '../../redux/user';

const mapStateToProps = function (state) {
  return {
    user: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    // going to need something to update user info.
    updateUserInfo: (update, attr, userId) => {
      dispatch(updateUser(update, attr, userId));
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = componentCreator(UserPage);
export default UserContainer;
