import { combineReducers } from "redux";
import item from "./itemReducer";
import loading from "./loadingReducer";

const rootReducer = combineReducers({
  item,
  loading,
});

export default rootReducer;
