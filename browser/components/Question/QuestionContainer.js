import { connect } from 'react-redux';
import {addNewKeyToServer} from "../../redux/UserKeyActions"
import MultipleChoice from "./MultipleChoice"
import { saveUserScoreToServer } from "../../redux/ProgressActions"


const mapStateToProps = ({ user, currentQuiz }) => ({
  user,
  currentQuiz
});

const mapDispatchToProps = dispatch => ({
  addKey: (id, keys) => dispatch(addNewKeyToServer(id, keys))
})

export const MultipleChoiceContainer = connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);
