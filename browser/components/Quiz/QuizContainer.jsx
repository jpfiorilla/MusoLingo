import Quiz from './Quiz'
import { connect } from 'react-redux';

const mapStateToProps = ({quizzes}) => ({
    quizzes
})

export default const QuizContainer = connect(mapStateToProps)(Quiz)