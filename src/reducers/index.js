import kontakReducer from "./kontak";

//!copasssssssssssssssss aja
const initialState = {};
const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        ...reducers[prop]({ [prop]: acc[prop] }, action),
      };
    }, state);
  };
};

const appReducers = combineReducers({
  kontakReducer, //!ssuaikan
});
export { initialState, combineReducers, appReducers };
