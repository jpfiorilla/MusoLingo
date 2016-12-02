import Quiz from './Quiz'
import { connect } from 'react-redux';
import { updateUser } from '../../redux/user';
import {addNewKeyToServer} from '../../redux/UserKeyActions'

const mapStateToProps = (state) => ({
    quizzes: state.quizzes,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({

    updateUser: (update, atrr, userId) => {
      dispatch(updateUser(update, atrr, userId));
    },
    addKeys: (id, keysToAdd) => {
        dispatch(addNewKeyToServer(id, keysToAdd))
    }

});

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default QuizContainer;
