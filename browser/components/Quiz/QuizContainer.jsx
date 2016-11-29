import Quiz from './Quiz'
import { connect } from 'react-redux';
import { addKeys } from '../../redux/UserKeyActions'
import {saveUserProgressToServer} from '../../redux/ProgressActions'

const mapStateToProps = (state) => ({
    quizzes: state.quizzes,
    user: state.user,
    currentQuiz: state.currentQuiz,
    quizScores: state.quizScores
})

const mapDispatchToProps = (dispatch) => ({
    addKeys,
    addQuizz: (id, quiz) => dispatch(saveUserProgressToServer(id, quiz))
})

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default QuizContainer;