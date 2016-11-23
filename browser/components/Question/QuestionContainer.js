import { connect } from 'react-redux';
import {addNewKeyToServer} from "../../redux/UserKeyActions"
import MultipleChoice from "./MultipleChoice"

const mapStateToProps = ({ user, numOfKeys }) => ({
  user,
  numOfKeys
});

const mapDispatchToProps = dispatch => ({
  addKey: (id, keys) => dispatch(addNewKeyToServer(id, keys))
})

export const MultipleChoiceContainer = connect(mapStateToProps, mapDispatchToProps)(MultipleChoice);