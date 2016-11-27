import { connect } from 'react-redux';
import UserPage from './UserPage';


const mapStateToProps = function (state) {
  return {
    user: state.user
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    // going to need something to update user info.
    updateUserInfo: (something) => {
      dispatch(somefunc(something));
    }
  };
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = componentCreator(UserPage);
export default UserContainer;
