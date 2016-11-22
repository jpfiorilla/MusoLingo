import { connect } from 'react-redux';
import Challenge from './Challenge';


const mapStateToProps = function (state) {
  return {
    // notes: state.notes,
    // bpm: state.bpm,
    scoreCounter: state.score
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

 export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
