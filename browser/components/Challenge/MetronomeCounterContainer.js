import { connect } from 'react-redux';
import MetronomeCounter from './MetronomeCounter';


const mapStateToProps = function (state) {
  return {
    rhythm: state.rhythm
  };
};

const mapDispatchToProps = function (dispatch) {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(MetronomeCounter);
