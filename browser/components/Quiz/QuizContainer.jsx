import Quiz from './Quiz'
import { connect } from 'react-redux';
import { addKeys } from '../../redux/UserKeyActions'

const mapStateToProps = (state) => ({
    quizzes: state.quizzes,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    addKeys
})

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);
export default QuizContainer;