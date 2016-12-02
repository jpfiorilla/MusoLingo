import { connect } from 'react-redux';
import MultipleChoice from "./MultipleChoice"

const mapStateToProps = ({ user, currentQuiz }) => ({
  user,
  currentQuiz
});

// const mapDispatchToProps = dispatch => ({
//   addKey: (id, keys) => dispatch(addNewKeyToServer(id, keys))
// })

export const MultipleChoiceContainer = connect(mapStateToProps)(MultipleChoice);
