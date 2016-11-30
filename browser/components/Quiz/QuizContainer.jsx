import Quiz from './Quiz'
import { connect } from 'react-redux';
import { addKeys } from '../../redux/UserKeyActions'
import { saveUserProgressToServer } from '../../redux/ProgressActions'

const mapStateToProps = (state) => ({
    quizzes: state.quizzes,
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    addQuizz: (id, quiz) => dispatch(saveUserProgressToServer(id, quiz))
});

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default QuizContainer;
