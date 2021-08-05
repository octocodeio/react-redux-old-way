import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { increment, decrement, addUser } from "./../redux/actions/counterActions";

import Counter from "./../components/Counter";

const mapStateToProps = (store) => ({
  counter: store.counter.value,
  users: store.counter.users
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increment,
      decrement,
      addUser
    },
    dispatch
  );

// const mapDispatchToProps = (dispatch) => ({
//   incrementAction: () => dispatch(increment())
// })

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
