import { connect } from 'react-redux';
import Challenge from './Challenge';


const mapStateToProps = function (state) {
  return {
    challenges: state.challenges,
    score: state.score,
    vexNotes: state.vexNotes
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

 export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
