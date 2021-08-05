import ActionTypes from '../../constants/ActionTypes';
import counterMock from './../mocks/counter.json';

const initialState = counterMock;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        value: state.value - 1
      };
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default:
      return state;
  }
};

export default counterReducer;
