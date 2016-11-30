import Quiz from './Quiz'
import { connect } from 'react-redux';
import { updateUser } from '../../redux/user';

const mapStateToProps = (state) => ({
    quizzes: state.quizzes,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({

    updateUser: (update, atrr, userId) => {
      dispatch(updateUser(update, atrr, userId));
    }

});

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default QuizContainer;
